// Make sure to include these imports:
// import { GoogleAIFileManager, FileState } from "@google/generative-ai/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";
const { GoogleGenerativeAI, DynamicRetrievalMode, } = require("@google/generative-ai");
const {GoogleAIFileManager, FileState } = require("@google/generative-ai/server");
require("dotenv").config();
const fileManager = new GoogleAIFileManager(process.env.API_KEY);


const fun = async (userInput, imageUrl) => {
const uploadResult = await fileManager.uploadFile(
  `./test2.mp3`,
  {
    mimeType: "audio/mp3",
    displayName: "Audio sample",
  },
);

let file = await fileManager.getFile(uploadResult.file.name);
while (file.state === FileState.PROCESSING) {
  process.stdout.write(".");
  // Sleep for 10 seconds
  await new Promise((resolve) => setTimeout(resolve, 10_000));
  // Fetch the file from the API again
  file = await fileManager.getFile(uploadResult.file.name);
}

if (file.state === FileState.FAILED) {
  throw new Error("Audio processing failed.");
}

// View the response.
console.log(
  `Uploaded file ${uploadResult.file.displayName} as: ${uploadResult.file.uri}`,
);

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const result = await model.generateContent([
  "Convert this audio sinhala audio clip into English.",
  {
    fileData: {
      fileUri: uploadResult.file.uri,
      mimeType: uploadResult.file.mimeType,
    },
  },
]);
console.log(result.response.text());
return result.response.text();
}
 fun("","");