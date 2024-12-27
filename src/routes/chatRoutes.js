const express = require("express");
const router = express.Router();
const chatController = require("../controllers/ChatController");


router.post("/chat", chatController.chatHandler);

module.exports = router;