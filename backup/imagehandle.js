async function getImage(
    imageUrl,
    input = "Explain this image according to tourist places in sri lanka"
  ) {
    const imageResp = await fetch(imageUrl).then((response) =>
      response.arrayBuffer()
    );
    const result = await model.generateContent([
      {
        inlineData: {
          data: Buffer.from(imageResp).toString("base64"),
          mimeType: "image/jpeg",
        },
      },
      `chat history: ${chatHistory
        .map((entry) => `User: ${entry.userInput}\n: ${entry.botResponse}`)
        .join("\n\n")}
          input: ${input}`,
    ]);
    return result.response.text();
  }


  if (imageUrl) {
    const response = await getImage(imageUrl, userInput);
    logChat(userInput, response);
    return response.response.text();
  }