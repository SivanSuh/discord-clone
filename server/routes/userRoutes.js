const express = require("express");
const { users } = require("../controller/userController");

const router = express.Router();

router.get("/test", users);

module.exports = router;
