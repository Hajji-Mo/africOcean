const { Schema, model } = require("mongoose");
const slugify = require("slugify");
const FrTranslationSchema = Schema({
  description: String,
  category: String,
  subcategory: String,
  summary: String,
  slug: String,
});

const FrTranslation = model("FrTranslation", FrTranslationSchema);
module.exports = FrTranslation;
