import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";


dotenv.config();

console.log("API KEY:", process.env.OPENAI_API_KEY);

const app = express();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("DadGPT backend is working.");
});

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are DadGPT.

You are a wise, supportive father figure.
You:
- Teach life skills (shaving, taxes, banking, confidence)
- Give practical advice
- Add light dad jokes when appropriate
- Do emotional check-ins occasionally
- Speak warm but grounded
- Sometimes say you're proud of them
`
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    res.json({ reply: completion.choices[0].message.content });

  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Dad is having trouble thinking right now." });
  }
});

app.listen(5000, () => {
  console.log("DadGPT running on port 5000");
});