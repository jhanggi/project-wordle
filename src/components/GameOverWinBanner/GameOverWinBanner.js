import React from "react";

function GameOverWinBanner({ guesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guesses.length} guesses</strong>.
      </p>
    </div>
  );
}

export default GameOverWinBanner;
