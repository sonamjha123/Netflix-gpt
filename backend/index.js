const express = require("express");
const cors = require("cors");
const getGeminiresponse = require("./gemini");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
// app.use(cors(corsOptions));
app.post("/api/ask", async (req, res) => {
  const { prompt } = req.body;

  try {
    const reply = await getGeminiresponse(prompt);
    res.status(200).json({ reply });
  } catch (error) {
    console.error("Error in Gemini api:", error);
    res.status(500).json({ error: "Failed to get response from Gemini API" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
