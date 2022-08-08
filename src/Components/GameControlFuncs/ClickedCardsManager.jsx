import { useState } from "react";

export const ClickedCardsManager = () => {
  const [clickedCards, setClickedCards] = useState([]);

  const containsCardsWithID = (id) => {
    return clickedCards.some((cardId) => cardId === id);
  };

  const addCardWithID = (id) => {
    setClickedCards((prevState) => {
      let currentCards = [...prevState];
      currentCards.push(id);
      return currentCards;
    });
  };

  const resetClickedCards = () => {
    setClickedCards([]);
  };

  const clickedAllCards = (count) => {
    return clickedCards.length === count - 1;
  };

  return [
    containsCardsWithID,
    resetClickedCards,
    clickedAllCards,
    addCardWithID,
  ];
};
