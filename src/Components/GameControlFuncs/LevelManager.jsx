import { useState } from "react";

const CARDS_TO_ADD = 2;
const MAX_CARDS = 20;
const INIT = { count: 2, currentLvl: 1 };

export const LevelManager = () => {
  const [level, setLevel] = useState(INIT);

  const nextLevel = () => {
    setLevel((prevState) => {
      let newCount =
        prevState.count < MAX_CARDS
          ? prevState.count + CARDS_TO_ADD
          : MAX_CARDS;
      let newLevel = prevState.currentLvl + 1;

      return { count: newCount, currentLvl: newLevel };
    });
  };

  const resetLevel = () => {
    setLevel({ ...INIT });
  };

  return [level, nextLevel, resetLevel];
};
