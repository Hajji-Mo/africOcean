const { default: mongoose } = require("mongoose");
const slugify = require("slugify");
const EngTranslationSchema = mongoose.Schema({
  description: {
    type: String,
    required: [true, "a product must have a description"],
  },
  category: {
    type: String,
    required: [true, "a product must have a category"],
  },
  subcategory: {
    type: String,
    required: [true, "a product must have a category"],
  },
  summary: String,
  slug: String,
  status: String,
});

const EngTranslation = mongoose.model("EngTranslation", EngTranslationSchema);
module.exports = EngTranslation;
