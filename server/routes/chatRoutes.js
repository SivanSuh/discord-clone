const express = require("express");
const { addMessage, getMessages } = require("../controller/messageController");

const router = express.Router();

router.post("/add", addMessage);
router.post("/getMessage", getMessages);

module.exports = router;
