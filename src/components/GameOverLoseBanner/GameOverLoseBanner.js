import React from "react";

function GameOverLoseBanner({ answer, resetGame }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={resetGame}>Reset game</button>
    </div>
  );
}

export default GameOverLoseBanner;
