const express = require("express");
const {
  login,
  register,
  logout,
  allUser,
} = require("../controller/authController.js");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/allUser", allUser);

module.exports = router;
