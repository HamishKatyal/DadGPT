<div align="center">

# 👨 DadGPT

### *Because some conversations are too important to leave to chance.*

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![OpenAI](https://img.shields.io/badge/Powered%20by-OpenAI-412991?style=flat-square&logo=openai)](https://openai.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

</div>

---

## 💭 The Story Behind DadGPT

Not everyone grows up with a father figure to turn to — someone to ask the awkward questions, get a reality check from, or just hear "I'm proud of you" on a hard day.

DadGPT was built for those moments.

Whether you never had that relationship, lost it too soon, or simply need a patient, non-judgmental presence at 2am when life feels heavy — this project is a small attempt to fill that space. It won't replace the real thing. But it'll be there, every time, ready to listen.

This is a personal project born out of genuine need. If it helps even one person feel a little less alone, it was worth building.

---

## ✨ What It Does

DadGPT is a **context-aware conversational AI assistant** that roleplays as a supportive, wise, and caring father figure. It's built with a **multi-turn conversation memory**, meaning it actually remembers what you've said earlier in the conversation — just like a real person would.

Key behaviours:
- Gives grounded, calm, no-nonsense advice
- Offers emotional support without being preachy
- Remembers context across the conversation
- Feels warm and human, not robotic

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | React (Create React App) | UI & chat interface |
| **Backend** | Node.js + Express | API server & middleware |
| **AI** | OpenAI API (`gpt-3.5-turbo` / `gpt-4`) | Language model |
| **Styling** | CSS3 | Custom component styles |
| **State** | React Hooks (`useState`, `useEffect`) | Conversation management |
| **HTTP** | Fetch API / Axios | Client-server communication |

### Key Files

```
DadGPT/
├── server.js          # Express backend — handles OpenAI API calls & prompt engineering
├── App.js             # Root React component
├── ChatScreen.js      # Main chat UI — multi-turn conversation rendering
├── Onboarding.js      # Welcome / intro flow for new users
├── App.css            # Global styles
├── index.css          # Base CSS resets
└── index.js           # React entry point
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- An [OpenAI API Key](https://platform.openai.com/api-keys) — you'll need a free or paid account

### 1. Clone the Repository

```bash
git clone https://github.com/HamishKatyal/DadGPT.git
cd DadGPT
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Your Environment Variables

Create a `.env` file in the root of the project:

```bash
touch .env
```

Add your OpenAI API key:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

> ⚠️ **Never commit your `.env` file to GitHub.** Make sure `.env` is listed in your `.gitignore`.

### 4. Start the Backend Server

```bash
node server.js
```

The Express server will start (default: `http://localhost:3001`).

### 5. Start the React Frontend

Open a **new terminal window** and run:

```bash
npm start
```

The app will open at `http://localhost:3000`.

---

## 🔑 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `OPENAI_API_KEY` | ✅ Yes | Your secret key from [OpenAI Platform](https://platform.openai.com/api-keys) |

---

## 💡 How It Works

DadGPT uses **prompt engineering** to set the personality and tone of the AI at the system level. When you send a message:

1. Your message is added to a **conversation history array** (multi-turn memory)
2. The full history is sent to the OpenAI API with every request — this is what gives the AI "memory"
3. The AI responds in character as a warm, supportive father figure
4. The response is rendered in the chat UI

The system prompt is the heart of the experience — it instructs the model on *how* to behave, not just *what* to say.

---

## 🧩 Enhancements & Roadmap

Here are improvements worth adding to make DadGPT more polished and production-ready:

- [ ] **`.env` validation on startup** — show a clear error if `OPENAI_API_KEY` is missing
- [ ] **Loading indicator** — show a typing animation while the AI is thinking
- [ ] **Error handling UI** — friendly message if the API call fails (rate limit, network error, etc.)
- [ ] **Conversation persistence** — save chats to `localStorage` so they survive page refresh
- [ ] **Clear conversation button** — let users start fresh
- [ ] **Mobile-responsive styling** — improve layout on small screens
- [ ] **Streaming responses** — use OpenAI's streaming API to display the reply word-by-word
- [ ] **Dark mode** — system-level preference detection
- [ ] **Deploy to Vercel / Render** — make it publicly accessible
- [ ] **Rate limiting on the server** — protect your API key from abuse if deployed publicly

---

## 🔒 A Note on Security

If you plan to deploy this publicly:

- **Never expose your OpenAI API key on the frontend.** All API calls must go through your backend (`server.js`).
- Consider adding **rate limiting** (e.g., with the `express-rate-limit` package) to prevent abuse.
- Use environment variables on your hosting platform (Vercel, Render, Railway, etc.) rather than a `.env` file.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm start` | Run the React frontend in development mode |
| `node server.js` | Start the Express backend server |
| `npm run build` | Build the frontend for production |
| `npm test` | Run the test suite |

---

## 🤝 Contributing

Contributions, issues, and feature suggestions are warmly welcome. If you've built something similar, improved it, or just want to talk about it — open an issue or a PR.

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push and open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — use it, share it, build on it.

---

<div align="center">

*Built with care by [Hamish Katyal](https://github.com/HamishKatyal)*

*For anyone who needed to hear "you're going to be okay" and didn't have someone to say it.*

</div>
