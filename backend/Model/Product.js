const { Schema, model } = require("mongoose");
const slugify = require("slugify");
const ProductSchema = Schema({
  brand: String,

  price: {
    type: Number,
    required: [true, "a product must have a price"],
  },
  coverImg: {
    type: String,
    required: [true, "a product must have a picture"],
  },
  images: Array,
  discount: {
    type: Number,
    validate: {
      validator: function (val) {
        // this only points to current doc on NEW document creation
        return val < this.price;
      },
      message: "Discount price ({VALUE}) should be below regular price",
    },
  },
  creator: {
    type: Schema.ObjectId,
    ref: "User",
    required: [true, "a product must have owner"],
  },
  country: {
    type: String,
    required: ["please provide your target Country"],
  },
  city: {
    type: String,
    required: ["please provide your target city"],
  },
  rank: Number,
  minQuantity: Number,
  tags: {
    type: Array,
    required: [true, "product must have a tag"],
  },

  en: {
    type: Schema.ObjectId,
    ref: "EngTranslation",
  },
  fr: {
    type: Schema.ObjectId,
    ref: "FrTranslation",
  },
});

ProductSchema.pre(/^find/, function (next) {
  this.populate({
    path: "creator",
    select: "-__v -passwordChangedAt",
  });

  next();
});

const Products = model("Product", ProductSchema);

module.exports = Products;
