import React from "react";
import { range } from "../../utils";

const emptyString = (len) =>
  range(len)
    .map(() => " ")
    .join("");

function GuessRow({ guess }) {
  const guessWithFallback = guess || emptyString(5);
  const characters = guessWithFallback.split("");

  return (
    <div class="guess-results">
      <p class="guess">
        {characters.map((char, i) => (
          <span key={i} class="cell">
            {char}
          </span>
        ))}
      </p>
    </div>
  );
}

export default GuessRow;
