import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Card } from "./Card";
import Status from "../Utils/Status";

const StyledGameBody = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem;
`;

const StyledMain = styled.main`
  flex: 1 1 auto;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const GameBody = ({ cards, onCardClick, level }) => {
  const [animate, setAnimate] = useState();

  useEffect(() => {}, [animate]);

  const handleCardClick = (id) => {
    setAnimate((prevState) => !prevState);
    onCardClick(id);
  };

  return (
    <StyledMain>
      <Status text={"Choose your next Pokemon!"} />
      <StyledGameBody>
        {cards &&
          cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              onCardClick={handleCardClick}
              animate={animate}
            />
          ))}
      </StyledGameBody>
    </StyledMain>
  );
};
