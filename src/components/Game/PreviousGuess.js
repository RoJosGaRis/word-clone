import "./PreviousGuess.css";

const PreviousGuess = ({ guess }) => {
  return (
    <p className="previous_guess_wrapper">
      <span className="previous_guess_letter">{guess[0]}</span>
      <span className="previous_guess_letter">{guess[1]}</span>
      <span className="previous_guess_letter">{guess[2]}</span>
      <span className="previous_guess_letter">{guess[3]}</span>
      <span className="previous_guess_letter">{guess[4]}</span>
    </p>
  );
};

export default PreviousGuess;
