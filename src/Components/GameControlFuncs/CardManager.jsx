import { useState } from "react";
import CardsCollection from "../Utils/RetrieveCards";


export const CardManager = () => {
  const [cards, setCards] = useState(null);

  const shuffleCards = () => {
    setCards((prevState) => CardsCollection.shuffleCards(prevState));
  };

  const updateCards = async (quantity) => {
    const newCards = await CardsCollection.getCardsBriefInfo(quantity);
    setCards(newCards);
  };

  return [cards, shuffleCards, updateCards];
};
