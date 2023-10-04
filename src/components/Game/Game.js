import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import GameOverBanner from "../GameOverBanner";
import GuessHistory from "../GuessHistory";
import GuessInput from "../GuessInput";
import GameOverWinBanner from "../GameOverWinBanner/GameOverWinBanner";
import GameOverLoseBanner from "../GameOverLoseBanner/GameOverLoseBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const getGameState = (guesses) => {
  if (guesses.includes(answer)) return { isGameOver: true, status: "WIN" };
  if (guesses.length >= NUM_OF_GUESSES_ALLOWED)
    return { isGameOver: true, status: "LOSE" };
  return { isGameOver: false };
};

const GameOverComponent = ({ guesses }) => {
  const gameState = getGameState(guesses);
  if (!gameState.isGameOver) return null;

  return gameState.status === "WIN" ? (
    <GameOverWinBanner guesses={guesses} />
  ) : (
    <GameOverLoseBanner answer={answer} />
  );
};

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const { isGameOver } = getGameState(guesses);

  const submitGuess = (guess) => {
    if (guesses.includes(guess)) return;
    setGuesses([...guesses, guess]);
  };
  return (
    <>
      <GameOverComponent guesses={guesses} />
      <GuessHistory guesses={guesses} answer={answer} />
      <GuessInput disabled={isGameOver} submitGuess={submitGuess} />
    </>
  );
}

export default Game;
