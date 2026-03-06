import { useState } from "react";
import { motion } from "framer-motion";

function Onboarding({ onComplete }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    age: "",
    reason: "",
    lifeStage: "",
    goal: ""
  });

  const next = () => setStep(step + 1);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const finish = () => {
    onComplete(form);
  };

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {step === 0 && (
        <>
          <h2>Welcome to DadGPT</h2>
          <p>What’s your name?</p>
          <input
            placeholder="Your name"
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <button onClick={next}>Next</button>
        </>
      )}

      {step === 1 && (
        <>
          <p>How old are you?</p>
          <input
            placeholder="Your age"
            onChange={(e) => handleChange("age", e.target.value)}
          />
          <button onClick={next}>Next</button>
        </>
      )}

      {step === 2 && (
        <>
          <p>Why are you here?</p>
          <select onChange={(e) => handleChange("reason", e.target.value)}>
            <option value="">Select</option>
            <option>Life guidance</option>
            <option>Practical skills</option>
            <option>Emotional support</option>
            <option>I never had a father figure</option>
          </select>
          <button onClick={next}>Next</button>
        </>
      )}

      {step === 3 && (
        <>
          <p>What’s your biggest focus right now?</p>
          <input
            placeholder="Career? Confidence? Discipline?"
            onChange={(e) => handleChange("goal", e.target.value)}
          />
          <button onClick={finish}>Start Chat</button>
        </>
      )}
    </motion.div>
  );
}

export default Onboarding;