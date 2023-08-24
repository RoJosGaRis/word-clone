import React from "react";
import { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "./GuessInput";
import PreviousGuesses from "./PreviousGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
export { answer };
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameState, setGameState] = useState("active");

  const onAddGuessHandler = (guess) => {
    let newGuess = checkGuess(guess, answer);

    setGuesses([...guesses, newGuess]);

    for (let i = 0; i < newGuess.length; i++) {
      if (
        newGuess[i].status === "incorrect" ||
        newGuess[i].status === "misplaced"
      ) {
        if (guesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
          setGameState("lost");
        }
        return;
      }
    }

    setGameState("won");
  };

  return (
    <div>
      <GuessInput
        onAddGuess={onAddGuessHandler}
        gameState={gameState}
      ></GuessInput>
      <PreviousGuesses guesses={guesses}></PreviousGuesses>
    </div>
  );
}

export default Game;
