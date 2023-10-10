import React from "react";

function GameOverWinBanner({ guesses, resetGame }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guesses.length} guesses</strong>.
        <button onClick={resetGame}>Reset game</button>
      </p>
    </div>
  );
}

export default GameOverWinBanner;
