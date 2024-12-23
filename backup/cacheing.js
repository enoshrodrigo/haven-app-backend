const cacheManager = new GoogleAICacheManager(process.env.API_KEY);  
const { GoogleAICacheManager } = require("@google/generative-ai/server");

const displayName = 'Hevan guider chatbot';
const systemInstruction = "You are Sri Lanka tourism AI chatbot , you name is hevan guider. You provide information about tourist packages based on history, weather,the  reviews contaion in packege, or even handle images if provided, dont say ayubowan every time, just say ayubowan one time per new chat.";



const model = 'models/gemini-1.5-flash-001'; 
let ttlSeconds = 300;
const cache = await cacheManager.create({
  model,
  displayName,
  systemInstruction,
  ttlSeconds,
});


const genAIa = new GoogleGenerativeAI(process.env.API_KEY);
const genModel = genAIa.getGenerativeModelFromCachedContent(cache); 