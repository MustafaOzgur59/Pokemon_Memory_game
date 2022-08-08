import { useState } from "react";

export const ScoreManager = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const resetScore = () => {
    setScore(0);
  };

  const updateScore = (ptsToAdd) => {
    setScore((prevState) => {
      const newScore = prevState + ptsToAdd;
      if (bestScore < newScore) {
        setBestScore(newScore);
      }
      return newScore;
    });
  };
  return [score, bestScore, updateScore, resetScore];
};
