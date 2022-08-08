import React from "react";
import styled, { keyframes } from "styled-components";
import { Modal } from "./Layout";
import SpinIcon from "./SpinIcon.png";

const spin = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

const pulse = keyframes`
from{
  transform: scale(1);
}

to{
  transform: scale(1.3);
}
`;

const LoadingModal = styled(Modal)`
  img {
    width: 100px;
    animation: ${spin} 1000ms ease-in-out infinite;
  }

  p {
    font-size: 12px;
    text-align: center;
    animation: ${pulse} 1000ms ease-in-out infinite;
  }

  @media (min-width: 576px) {
    img {
      width: 100px;
    }
    p {
      font-size: 28px;
    }
  }
  z-index: 50;
`;

export default function Loading({ text, show }) {
  return (
    show && (
      <LoadingModal>
        <img src={SpinIcon} alt="icon" />
        {text && <p>{text}</p>}
      </LoadingModal>
    )
  );
}
