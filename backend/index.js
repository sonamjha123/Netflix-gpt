const express = require("express");
const cors = require("cors");
const getGeminiresponse = require("./gemini");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// app.use(cors());
app.use(express.json());
try {
  const corsOptions = {
    origin: ['http://localhost:3000', 'http://example.com'],
    optionsSuccessStatus: 200
  };
  app.use(cors(corsOptions));
} catch (err) {
  console.error("Error in Gemini API:", err.message, err.stack);
  // handle the error here
}
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
