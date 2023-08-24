import "./GuessInput.css";
import { useState } from "react";
import { answer } from "./Game";

const GuessInput = ({ onAddGuess, gameState }) => {
  const [currentGuess, setCurrentGuess] = useState("");

  const SubmitInputHandler = (event) => {
    event.preventDefault();
    onAddGuess(currentGuess);
    setCurrentGuess("");
  };

  return (
    <div className="guess_input_wrapper">
      <form
        onSubmit={SubmitInputHandler}
        className={`guessInput ${gameState === "active" ? "shown" : "hidden"}`}
      >
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
          onChange={(event) =>
            setCurrentGuess(event.target.value.toUpperCase())
          }
        ></input>
      </form>
      <div className={`won ${gameState === "won" ? "shown" : "hidden"}`}>
        YOU WON!
      </div>
      <div className={`lost ${gameState === "lost" ? "shown" : "hidden"}`}>
        IT WAS {answer}!
      </div>
    </div>
  );
};

export default GuessInput;
