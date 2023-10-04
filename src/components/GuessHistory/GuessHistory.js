import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import GuessRow from "../GuessRow/GuessRow";

function GuessHistory({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <GuessRow guess={num} key={guesses[num]} />
      ))}
    </div>
  );
}

export default GuessHistory;
