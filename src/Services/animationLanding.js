import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimatedContainer = styled.div`
    animation: ${fadeIn} 1s ease-out;
`;

export const AnimatedTitle = styled.h1`
    animation: ${slideInFromLeft} 1s ease-out;
`;

export const AnimatedButton = styled.div`
    animation: ${slideInFromRight} 1s ease-out;
`;

export const AnimatedSection = styled.div`
    animation: ${fadeIn} 1s ease-out;
`;
