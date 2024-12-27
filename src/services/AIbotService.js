const connectDB = require("../conf/db");
const ChatHistory = require("../models/ChatHistory");
const {intro} = require("../../data");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

// Connect to database
connectDB();

// Initialize GenAI
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-pro" });

// Function to get or create chat history for a user
async function getUserChatHistory(userId) {
  let userChat = await ChatHistory.findOne({ userId });

  if (!userChat) {
    userChat = new ChatHistory({
      userId,
      encryptedHistory: "",
    });
    await userChat.save();
  }

  // Decrypt 
  const chatHistory = userChat.encryptedHistory
    ? userChat.decryptChat(userChat.encryptedHistory)
    : "[]";

  return { userChat, chatHistory: JSON.parse(chatHistory) };
}

// Function to save updated chat history
async function saveUserChatHistory(userId, chatHistory) {
  const userChat = await ChatHistory.findOne({ userId });
  userChat.encryptedHistory = userChat.encryptChat(
    JSON.stringify(chatHistory)
  );
  await userChat.save();
}

// Chatbot logic
  exports.handleUserInput = async(userId = 1, input) => {
  const { userChat, chatHistory } = await getUserChatHistory(userId);
 
  const prompt = `chat history: ${chatHistory
    .map(({ userInput, botResponse }) => `User:${userInput}\nBot: ${botResponse}`)
    .join("\n\n")}
    input: ${input}`;

  // Generate AI response
  const result = await model.generateContent({
    contents: [
        {
            role: "model",
            parts: [{ text: `${intro}` }],
          },

      {
        role: "user",
        parts: [{ text: prompt , }],

      },
      
    ],
  });

  const botResponse = result.response.text();

  // Update chat history
  chatHistory.push({ userInput: input, botResponse });
  await saveUserChatHistory(userId, chatHistory);

  return botResponse;
} 


