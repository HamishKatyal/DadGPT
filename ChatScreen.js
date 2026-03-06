import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function ChatScreen({ userData }) {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [typing, setTyping] = useState(false);

  const sendMessage = async (customMessage = null) => {
    const finalMessage = customMessage || message;
    if (!finalMessage) return;

    setTyping(true);
    setMessage("");

    setChat(prev => [...prev, { type: "user", text: finalMessage }]);

    try {
      const response = await axios.post("http://localhost:5000/chat", {
        message: `User info: ${JSON.stringify(userData)}. Message: ${finalMessage}`
      });

      setTimeout(() => {
        setChat(prev => [...prev, { type: "dad", text: response.data.reply }]);
        setTyping(false);
      }, 800);

    } catch (error) {
      setTyping(false);
    }
  };

  const dadJoke = () => {
    sendMessage("Tell me a classic dad joke.");
  };

  return (
    <div className="chatContainer">

      <div className="chatHeader">
        <h3>DadGPT</h3>
        <span>Always in your corner</span>
      </div>

      <div className="messages">
        {chat.map((m, i) => (
          <motion.div
            key={i}
            className={m.type === "user" ? "userBubble" : "dadBubble"}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {m.text}
          </motion.div>
        ))}

        {typing && (
          <motion.div
            className="dadBubble typing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Dad is typing...
          </motion.div>
        )}
      </div>

      <div className="inputBar">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Talk to Dad..."
        />
        <button onClick={() => sendMessage()}>Send</button>
      </div>

      <motion.button
        className="jokeButton"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={dadJoke}
      >
        🎁 Surprise Dad Joke
      </motion.button>

    </div>
  );
}

export default ChatScreen;