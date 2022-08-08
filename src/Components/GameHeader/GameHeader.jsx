import React from "react";
import styled from "styled-components";
import Logo from "./Logo/Logo";
import ScoreBoard from "./ScoreBoard/ScoreBoard";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 60px;
  background-color: var(--primary);
  background-color: blue;
  h1 {
    font-size: 28px;
    color: white;
  }
`;

export default function GameHeader({ score, bestScore, level }) {
  return (
    <StyledWrapper>
      <Logo />
      <h1>Pokemon Memory Card Game</h1>
      <ScoreBoard score={score} bestScore={bestScore} level={level} />
    </StyledWrapper>
  );
}
