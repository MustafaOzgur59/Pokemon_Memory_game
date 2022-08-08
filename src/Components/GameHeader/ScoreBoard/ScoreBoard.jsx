import React from "react";
import styled from "styled-components";

const StyledBoard = styled.div`
  padding: 5px;
  flex: 1 1 200px;
  display: flex;
  align-items: center;
  max-width: 20%;
  justify-content: center;
`;

const Score = styled.p`
  color: rgb(188 255 152);
  padding: 5px;
  font-size: 20px;
  @media (min-width: 576px) {
    font-size: 24px;
  }
`;

const BestScore = styled(Score)`
  color: rgb(255 152 152);
`;

const Divider = styled.div`
  height: 24px;
  width: 1px;
  background-color: white;
  margin: 0 10px;
`;

export default function ScoreBoard({ score, bestScore }) {
  return (
    <StyledBoard>
      <Score>Score: 12 {score}</Score>
      <Divider />
      <BestScore>Best: 20 {bestScore}</BestScore>
    </StyledBoard>
  );
}
