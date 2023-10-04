import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import GuessRow from "../GuessRow/GuessRow";

function GuessHistory({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <GuessRow guess={guesses[num]} key={num} answer={answer} />
      ))}
    </div>
  );
}

export default GuessHistory;
