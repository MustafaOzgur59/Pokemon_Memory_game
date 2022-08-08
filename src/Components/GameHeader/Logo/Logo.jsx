import styled from "styled-components";
import logo from "./logo.png";
import React from "react";
const StyledLogo = styled.div`
  width: 150px;
  height: 80px;
  padding: 4px;
  min-height: 50px;
  min-width: 80px;

  img {
    width: 150px;
    height: 80px;
  }
`;

export default function Logo() {
  return (
    <StyledLogo>
      <img src={logo} alt="Logo" />
    </StyledLogo>
  );
}
