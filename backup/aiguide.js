const { GoogleGenerativeAI } = require("@google/generative-ai");
const    dotenv  = require("dotenv");
dotenv.config();
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
console.log(genAI);

const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-pro' });

async function generateImageCaption() {
    const imageResp = await fetch(
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXCpb0Kd4KzDmdEtQsDURYNiv6mo4cCEMqQ&s'
    )
        .then((response) => response.arrayBuffer());

    const result = await model.generateContent([
        {
            inlineData: {
                data: Buffer.from(imageResp).toString("base64"),
                mimeType: "image/jpeg",
            },
        },
        'Caption this image and can u give me today\'s weather report near in sigiriya, give me laitude and latitude in sigiriya',
    ]);
    console.log(result.response.text());
}

async function generateImageCaptionJSON() {
    const imageResp = await fetch(
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXCpb0Kd4KzDmdEtQsDURYNiv6mo4cCEMqQ&s'
    )
        .then((response) => response.arrayBuffer());

    const result = await model.generateContent([
        {
            inlineData: {
                data: Buffer.from(imageResp).toString("base64"),
                mimeType: "image/jpeg",
            },
        },
        `List a few popular places near the image provide place using this JSON schema:

Location = {'location': string, 'latitude': number, 'longitude': number, 'distance': number, 'description': string,'imageUrl': string},
Return: Array<Location>`,
    ]);
    console.log(result.response.text()); 
}
async function textGenTextOnlyPromptStreaming() {
    // [START text_gen_text_only_prompt_streaming]
    // Make sure to include these imports:
    // import { GoogleGenerativeAI } from "@google/generative-ai";
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
    const prompt = "Write a story about a magic backpack.";
  
    const result = await model.generateContentStream(prompt);
  
    // Print text as it comes in.
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      process.stdout.write(chunkText);
    }
    // [END text_gen_text_only_prompt_streaming]
  }

  async function textGenTextOnlyPrompt() {
    // [START text_gen_text_only_prompt]
    // Make sure to include these imports:
    // import { GoogleGenerativeAI } from "@google/generative-ai";
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
    const prompt = "Write a story about a magic backpack.";
  
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    // [END text_gen_text_only_prompt]
  }
  
  textGenTextOnlyPrompt();