const { Schema, model } = require("mongoose");
const slugify = require("slugify");
const ProductSchema = Schema({
  name: {
    type: String,
    required: [true, "a product must have a name"],
  },
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
  activeStatus: {
    type: String,
    enum: ["active", "pending"],
    default: "pending",
    required: [true, "a product must have status"],
  },
  country: {
    type: String,
    required: ["please provide your target Country"],
  },
  city: {
    type: String,
    required: ["please provide your target city"],
  },
  rate: Number,
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
ProductSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
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
