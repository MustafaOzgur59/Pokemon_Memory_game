import { useState } from "react";
import { CardManager } from "./CardManager";
import { LevelManager } from "./LevelManager";
import { ClickedCardsManager } from "./ClickedCardsManager";
import { ScoreManager } from "./ScoreManager";

export const GameManager = () => {
  const [loading, setLoading] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [instructionOpen, setInstructionOpen] = useState(true);
  const [
    containsCardsWithID,
    resetClickedCards,
    clickedAllCards,
    addCardWithID,
  ] = ClickedCardsManager();
  const [cards, shuffleCards, updateCards] = CardManager();
  const [level, nextLevel, resetLevel] = LevelManager();
  const [score, bestScore, updateScore, resetScore] = ScoreManager();

  const startTheLevel = async () => {
    await updateCards(level.count);
    setLoading(false);
  };

  const startNewGame = () => {
    setLoading(true);
    setIsGameOver(false);
    resetClickedCards();
    resetScore();
    resetLevel();
  };

  const handleCardClick = (id) => {
    if (!containsCardsWithID(id)) {
      addCardWithID(id);
      updateScore(1);

      // progress to next level
      if (clickedAllCards(level.count)) {
        resetClickedCards();
        setLoading(true);
        nextLevel();
      } else {
        shuffleCards();
      }
    } else {
      setIsGameOver(true);
    }
  };

  return [
    loading,
    instructionOpen,
    setInstructionOpen,
    isGameOver,
    cards,
    score,
    bestScore,
    level,
    startTheLevel,
    handleCardClick,
    startNewGame,
  ];
};
