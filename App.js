import React, { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [age, setAge] = useState("");
  const [reason, setReason] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [jokeIndex, setJokeIndex] = useState(0);

  const dadJokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "I only know 25 letters of the alphabet. I don't know y.",
    "Why couldn't the bicycle stand up by itself? It was two tired.",
    "I'm reading a book about anti-gravity. It's impossible to put down.",
    "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
    "I used to hate facial hair… but then it grew on me.",
    "What do you call fake spaghetti? An impasta.",
    "Why did the scarecrow win an award? He was outstanding in his field.",
    "I would tell you a construction joke… but I’m still working on it.",
    "Why don’t eggs tell jokes? They’d crack each other up.",
    "I used to play piano by ear… now I use my hands.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why did the math book look sad? Too many problems.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why did the coffee file a police report? It got mugged."
  ];

  const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = input;

  setMessages((prev) => [
    ...prev,
    { sender: "user", text: userMessage }
  ]);

  setInput("");

  try {
    const res = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      { sender: "dad", text: data.reply }
    ]);
  } catch (error) {
    setMessages((prev) => [
      ...prev,
      { sender: "dad", text: "Dad is having technical difficulties." }
    ]);
  }
};

  const handleDadJoke = () => {
    setMessages((prev) => [
      ...prev,
      { sender: "dad", text: dadJokes[jokeIndex] }
    ]);

    setJokeIndex((prevIndex) =>
      prevIndex === dadJokes.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="app">
      {step === 1 && (
        <div className="card fade">
          <h2>How old are you?</h2>
          <input
            type="number"
            placeholder="Your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button onClick={() => setStep(2)}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="card fade">
          <h2>Why are you here?</h2>
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          >
            <option value="">Select</option>
            <option value="guidance">Life guidance</option>
            <option value="motivation">Motivation</option>
            <option value="jokes">Dad jokes</option>
          </select>
          <button onClick={() => setStep(3)}>Continue</button>
        </div>
      )}

      {step === 3 && (
        <div className="chat-container fade">
          <h1>DadGPT</h1>
          <p className="subtitle">Always in your corner</p>

          <div className="messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "user"
                    ? "message user"
                    : "message dad"
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask Dad something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
          </div>

          <button className="joke-btn" onClick={handleDadJoke}>
            🎁 Surprise Dad Joke
          </button>
        </div>
      )}
    </div>
  );
}

export default App;