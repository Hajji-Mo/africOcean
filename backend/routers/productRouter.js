const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProduct,
  getSearchedPorducts,
  deleteProduct,
  updateProduct,
  updateAllProducts,
  getPendedPorducts,
  uploadImages,
  resizeImages,
  getTopProducts,
  getNewProducts,
} = require("../controllers/productController");

const router = express.Router();

router.route("/uploadImages").post(uploadImages, resizeImages);
router.route("/search").get(getSearchedPorducts);
router.route("/pendingProducts").get(getPendedPorducts);
router.route("/topProducts").get(getTopProducts);
router.route("/newProducts").get(getNewProducts);
router
  .route("/")
  .get(getAllProducts)
  .post(createProduct)
  .patch(updateAllProducts);
router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);
module.exports = router;
