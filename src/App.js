// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const customDictionary = {
    tch: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    // Reset suggestion if text is empty
    if (!inputText.trim()) {
      setSuggestion("");
      return;
    }

    // Split text into words
    const words = inputText.split(/\s+/);

    // Find the first misspelled word
    for (let word of words) {
      const lowerCaseWord = word.toLowerCase().replace(/[^a-z]/gi, "");

      if (lowerCaseWord && customDictionary[lowerCaseWord]) {
        setSuggestion(`Did you mean: ${customDictionary[lowerCaseWord]}?`);
        return;
      }
    }

    // If no misspelling found, clear suggestion
    setSuggestion("");
  };

  return (
    <div className="App">
      <div className="spellcheck-container">
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text..."
          className="text-input"
          rows="6"
        />
        {suggestion && <p className="suggestion">{suggestion}</p>}
      </div>
    </div>
  );
}

export default App;
