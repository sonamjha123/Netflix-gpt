const getGeminiResponse = require("./gemini");
require("dotenv").config();

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { prompt } = JSON.parse(event.body);

    const reply = await getGeminiResponse(prompt);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // enable CORS
      },
      body: JSON.stringify({ reply }),
    };
  } catch (error) {
    console.error("Error in Gemini API:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to get response from Gemini API" }),
    };
  }
};
