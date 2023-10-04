import React from "react";

function GuessHistory({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        // guesses are unique per the submit handler so it's ok to use it as a key
        <p className="guess" key={guess}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessHistory;
