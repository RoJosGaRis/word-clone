import React from "react";
import { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import { checkGuess } from "../../game-helpers";
import GuessInput from "./GuessInput";
import PreviousGuesses from "./PreviousGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const onAddGuessHandler = (guess) => {
    let newGuess = checkGuess(answer, guess);
    setGuesses([...guesses, newGuess]);
  };

  return (
    <div>
      <GuessInput onAddGuess={onAddGuessHandler}></GuessInput>
      <PreviousGuesses guesses={guesses}></PreviousGuesses>
    </div>
  );
}

export default Game;
