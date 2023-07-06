const express = require("express");
const { addMessage, getMessages } = require("../controller/messageController");

const router = express.Router();

router.post("/add", addMessage);
router.post("/chats", getMessages);

module.exports = router;
