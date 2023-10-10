import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import GuessHistory from "../GuessHistory";
import GuessInput from "../GuessInput";
import GameOverWinBanner from "../GameOverWinBanner/GameOverWinBanner";
import GameOverLoseBanner from "../GameOverLoseBanner/GameOverLoseBanner";

const getGameState = ({ answer, guesses }) => {
  if (guesses.includes(answer)) return { isGameOver: true, status: "WIN" };
  if (guesses.length >= NUM_OF_GUESSES_ALLOWED)
    return { isGameOver: true, status: "LOSE" };
  return { isGameOver: false };
};

const GameOverComponent = ({ guesses, answer, resetGame }) => {
  const gameState = getGameState({ answer, guesses });
  if (!gameState.isGameOver) return null;

  return gameState.status === "WIN" ? (
    <GameOverWinBanner guesses={guesses} resetGame={resetGame} />
  ) : (
    <GameOverLoseBanner answer={answer} resetGame={resetGame} />
  );
};

const pickWord = () => sample(WORDS);

function Game() {
  const [answer, setAnswer] = React.useState(() => pickWord());

  const [guesses, setGuesses] = React.useState([]);

  const { isGameOver } = getGameState({ answer, guesses });

  React.useEffect(() => {
    // To make debugging easier, we'll log the solution in the console.
    console.info({ answer });
  }, [answer]);

  const resetGame = () => {
    setAnswer(pickWord());
    setGuesses([]);
  };

  const submitGuess = (guess) => {
    if (guesses.includes(guess)) return;
    setGuesses([...guesses, guess]);
  };
  return (
    <>
      <GameOverComponent
        answer={answer}
        guesses={guesses}
        resetGame={resetGame}
      />
      <GuessHistory guesses={guesses} answer={answer} />
      <GuessInput disabled={isGameOver} submitGuess={submitGuess} />
    </>
  );
}

export default Game;
