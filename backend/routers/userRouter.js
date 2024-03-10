const express = require("express");
const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  updateAllUsers,
  deleteUser,
} = require("../controllers/userController");
const { signup, login, logout } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

router.route("/").get(getAllUsers).post(createUser).patch(updateAllUsers);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
