const chatbotService = require('../services/chatbotService');

exports.handleChat = async (req, res) => {
    const { userInput, imageUrl } = req.body;
console.log("userInput",imageUrl);
    if (!userInput && !imageUrl) {
        return res.status(400).json({ error: "Invalid input" });
    }

    try {
        const response = await chatbotService.handleChatLogic(userInput, imageUrl);
        console.log("response",response);
        res.json({ botResponse:response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};