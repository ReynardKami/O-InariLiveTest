import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import Vector from "../Icons/Vector";

const VectorContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 48em) {
    left: 1rem;
  }
`;
const Bounce = keyframes`
from {  transform: translateX(-50%) scale(0.5);  }
to {  transform: translateX(-50%) scale(1);  }

`;

const Ball = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #000000;
  animation: ${Bounce} 0.5s linear infinite alternate;

  @media (max-width: 48em) {
    left: 1rem;
  }
`;

const DrawSvg = () => {
  const ref = useRef(null);

  return (
    <>
      <Ball />
      <VectorContainer ref={ref}>
        <Vector />
      </VectorContainer>
    </>
  );
};

export default DrawSvg;
