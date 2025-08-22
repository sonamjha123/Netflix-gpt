const express = require("express");
const cors = require("cors");
const getGeminiResponse = require("./gemini");
require("dotenv").config();

const app = express();

// Vercel serverless doesn't need a PORT or app.listen()
app.use(cors()); // Allow all origins, you can customize if needed
app.use(express.json());

// Your /api/ask endpoint
app.post("/api/ask", async (req, res) => {
  const { prompt } = req.body;

  try {
    const reply = await getGeminiResponse(prompt);
    res.status(200).json({ reply });
  } catch (error) {
    console.error("Error in Gemini API:", error);
    res.status(500).json({ error: "Failed to get response from Gemini API" });
  }
});

// Export the handler for Vercel
module.exports = app;
