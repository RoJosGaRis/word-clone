import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import PreviousGuess from "./PreviousGuess";
import "./PreviousGuesses.css";

const PreviousGuesses = ({ guesses }) => {
  return (
    <div className="previous-guesses">
      <h3>Previous Guesses</h3>
      <ul className="previous_guesses_wrapper">
        {guesses.map((currentGuess, index) => {
          return <PreviousGuess guess={currentGuess}></PreviousGuess>;
        })}
        {range(0 + guesses.length, NUM_OF_GUESSES_ALLOWED, 1).map(() => {
          return <PreviousGuess guess={""}></PreviousGuess>;
        })}
      </ul>
    </div>
  );
};

export default PreviousGuesses;
