import "./PreviousGuess.css";

const PreviousGuess = ({ guess }) => {
  return (
    <p className="previous_guess_wrapper">
      <span className={"previous_guess_letter " + guess[0].status}>
        {guess[0].letter}
      </span>
      <span className={"previous_guess_letter " + guess[1].status}>
        {guess[1].letter}
      </span>
      <span className={"previous_guess_letter " + guess[2].status}>
        {guess[2].letter}
      </span>
      <span className={"previous_guess_letter " + guess[3].status}>
        {guess[3].letter}
      </span>
      <span className={"previous_guess_letter " + guess[4].status}>
        {guess[4].letter}
      </span>
    </p>
  );
};

export default PreviousGuess;
