const chatbotService = require('../../backup/chatbotService');
const chatHistoryService = require('../services/AIbotService');



 exports.chatHandler = async (req, res) =>{
    const { userInput } = req.body;
     userId = 1; // For simplicity, I am using a single user ID if you want to implement multiple users, you can use the user ID from the request body(this for users to have their own chat history) --enosh rodrigo
  
    try {
      const response = await chatHistoryService.handleUserInput(userId, userInput);
      res.json({  botResponse:response });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  }