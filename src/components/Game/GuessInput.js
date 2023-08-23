import "./GuessInput.css";
import { useState } from "react";

const GuessInput = ({ onAddGuess }) => {
  const [currentGuess, setCurrentGuess] = useState("");

  const SubmitInputHandler = (event) => {
    event.preventDefault();
    onAddGuess(currentGuess);
    setCurrentGuess("");
  };

  return (
    <form onSubmit={SubmitInputHandler} className="guessInput">
      <label htmlFor="guessInput" className="guessInput_label">
        {" "}
        Input Guess
      </label>
      <input
        pattern="\w{5,5}"
        required
        value={currentGuess}
        id="guessInput"
        className="guessInput_input"
        type="text"
        onChange={(event) => setCurrentGuess(event.target.value.toUpperCase())}
      ></input>
    </form>
  );
};

export default GuessInput;
