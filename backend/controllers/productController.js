const path = require("path");
const multer = require("multer");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const sharp = require("sharp");
const Products = require("../Model/Product");
const EngTranslation = require("../Model/EngTranslation");

const {
  createOne,
  deleteOne,
  getAll,
  updateOne,
  getOne,
  updateAll,
} = require("./HandleFactory");
const catchAsync = require("../utils/catchAsync");
const FrTranslation = require("../Model/FrTranslation");

const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_REGION = process.env.AWS_REGION;

const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
};
const s3Client = new S3Client(awsConfig);
const multerStorage = multer.memoryStorage();

const productsQuery = (req) => {
  let query = {};
  if (req.query.search) {
    query.tags = { $regex: req.query.search, $options: "i" };
  }
  if (req.query.country || req.query.city) {
    query.country = { $regex: req.query.country, $options: "i" };
    query.city = { $regex: req.query.city, $options: "i" };
    query.activeStatus = "active";
  }
  return query;
};
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
exports.uploadImages = upload.fields([
  {
    name: "coverImg",
    maxCount: 1,
  },
  {
    name: "images",
    maxCount: 4,
  },
]);
const uploadToS3 = async (key, buffer) => {
  const command = new PutObjectCommand({
    Bucket: process.env.YOUR_S3_BUCKET_NAME,
    Key: key,
    Body: buffer,
  });

  await s3Client.send(command);
};
exports.resizeImages = catchAsync(async (req, res, next) => {
  if (!req.files.coverImg || !req.files.images) return next();

  // 1) Cover image
  const coverImg = `${Date.now()}-${req.files.coverImg[0].originalname}`;
  let images = [];

  const coverImgResize = await sharp(req.files.coverImg[0].buffer)
    .resize(640, 640, { fit: "outside" })
    .toFormat("jpg")
    .png({ quality: 70 })
    .toBuffer();

  await uploadToS3(coverImg, coverImgResize);

  // 2) Images

  await Promise.all(
    req.files.images.map(async (file, i) => {
      const originalName = file.originalname.split(".")[0];
      // originalname: 'darkblue-man-3.png',
      const fileNames = `${Date.now()}-${originalName}.jpg`;

      const resizedImages = await sharp(file.buffer)
        .resize(640, 640, { fit: "outside" })
        .toFormat("jpg")
        .png({ quality: 70 })
        .toBuffer();

      await uploadToS3(fileNames, resizedImages);

      images.push(fileNames);
    })
  );
  images.unshift(coverImg);
  res.status(201).json({
    status: "success",
    coverImg,
    images,
  });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  if (req.body.en || req.body.fr) {
    const en = await EngTranslation.create(req.body.en);
    const fr = await FrTranslation.create(req.body.fr);
    req.body.en = en._id.toString().split("()").join();
    req.body.fr = fr._id.toString().split("()").join();
  } else {
    return next(
      new AppError(
        "product name , description and more other fields are required",
        404
      )
    );
  }

  const doc = await Products.create(req.body);
  if (!doc) {
    if (req.body.en) await EngTranslation.delete(req.body.en);
    if (req.body.fr) await EngTranslation.delete(req.body.fr);
    return next(
      new AppError("No document is created there's some thing went wrong", 404)
    );
  }

  res.status(201).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

exports.getSearchedPorducts = catchAsync(async (req, res, next) => {
  const query = productsQuery(req);
  const doc = await Products.find(query)
    .populate({ path: `${req.query.lang}` })
    .sort("-_id");
  res.status(200).json({
    success: true,
    doc,
  });
});
exports.getTopProducts = catchAsync(async (req, res, next) => {
  const query = productsQuery(req);
  const doc = await Products.find(query)
    .populate({ path: `${req.query.lang}` })
    .sort({ rate: -1 })
    .limit(4);
  res.status(200).json({
    success: true,
    doc,
  });
});

exports.getNewProducts = catchAsync(async (req, res, next) => {
  const query = productsQuery(req);
  const doc = await Products.find(query)
    .populate({ path: `${req.query.lang}` })
    .sort({ _id: -1 })
    .limit(4);
  res.status(200).json({
    success: true,
    doc,
  });
});

exports.getPendedPorducts = catchAsync(async (req, res, next) => {
  const doc = await Products.find({ activeStatus: "pending" })
    .populate({ path: `${req.query.lang}` })
    .sort("-_id");

  res.status(200).json({
    success: true,
    doc,
  });
});

exports.getAllProducts = getAll(Products, "populate");
exports.getProduct = getOne(Products, "populate");
exports.updateAllProducts = updateAll(Products, "populate");
exports.updateProduct = updateOne(Products, "populate");
exports.deleteProduct = deleteOne(Products, "populate");
