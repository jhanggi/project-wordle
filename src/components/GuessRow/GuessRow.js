import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}

function GuessRow({ guess, answer }) {
  const checkedGuess =
    checkGuess(guess, answer) ??
    range(5).map(() => ({ letter: "", status: "" }));

  return (
    <div className="guess-results">
      <p className="guess">
        {checkedGuess.map(({ letter, status }, i) => (
          <Cell key={i} letter={letter} status={status} />
        ))}
      </p>
    </div>
  );
}

export default GuessRow;
