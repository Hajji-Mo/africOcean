const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  updateAllProducts,
  uploadImages,
  resizeImages,
} = require("../controllers/productController");

const router = express.Router();

router.route("/uploadImages").post(uploadImages, resizeImages);
router
  .route("/")
  .get(getAllProducts)
  .post(createProduct)
  .patch(updateAllProducts);
router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);
module.exports = router;
