const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { v4: uuidv4 } = require("uuid");

// Set your AWS credentials and region
const awsConfig = {
  credentials: {
    accessKeyId: "YOUR_ACCESS_KEY",
    secretAccessKey: "YOUR_SECRET_KEY",
  },
  region: "YOUR_REGION",
};

const s3Client = new S3Client(awsConfig);

const upload = multer({ dest: "uploads/" });

const uploadToS3 = async (key, buffer) => {
  const command = new PutObjectCommand({
    Bucket: "YOUR_S3_BUCKET_NAME",
    Key: key,
    Body: buffer,
  });

  await s3Client.send(command);
};

const app = express();
const port = 3000;

app.post("/upload", upload.single("coverPhoto"), async (req, res) => {
  try {
    // Resize cover photo
    const resizedCoverPhotoBuffer = await sharp(req.file.path)
      .resize({ width: 300, height: 300 })
      .toBuffer();

    // Upload resized cover photo to S3
    const coverPhotoKey = `covers/${uuidv4()}_${req.file.originalname}`;
    await uploadToS3(coverPhotoKey, resizedCoverPhotoBuffer);

    // Upload other images to S3
    const uploadedImages = [];
    for (let i = 1; i <= 4; i++) {
      const imageKey = `images/${uuidv4()}_image${i}_${req.file.originalname}`;
      const imageBuffer = await sharp(req.file.path)
        .resize({ width: 200, height: 200 })
        .toBuffer();

      await uploadToS3(imageKey, imageBuffer);

      uploadedImages.push(imageKey);
    }

    res.json({
      coverPhoto: coverPhotoKey,
      images: uploadedImages,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
