import styled from "styled-components";
import { Modal } from "../Utils/Layout";
import React from "react";

const GameOverModal = styled(Modal)`
  p {
    font-size: 20px;
    text-align: center;
  }
  h2 {
    font-size: 28px;
  }

  #media (min-width:576px) {
    p {
      font-size: 30px;
    }
    h2 {
      font-size: 44px;
    }
  }
  z-index: 50;
`;

const Button = styled.button`
  margin-top: 20px;
  color: var(--primary-text);
  background-color: var(--secondary);
  padding: 5px 12px;
  font-size: 18px;
  border: 0;
  border-radius: 6px;

  :hover {
    background-color: rgb(70 77 90);
  }
  #media (min-width:576px) {
    font-size: 24px;
  }
`;

export default function GameOver({ show, score, onNewGameClick }) {
  return (
    show && (
      <GameOverModal>
        <h2>Game Over!</h2>
        <p>Your score is: {score}</p>
        <Button onClick={onNewGameClick}>New Game</Button>
      </GameOverModal>
    )
  );
}
