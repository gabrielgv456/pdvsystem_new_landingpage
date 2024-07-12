import { css, keyframes, styled } from 'styled-components';


const fadeInBottom = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const AnimationFadeInBottom = css`
  animation: ${fadeInBottom} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`;



const fadeInLeft = keyframes`
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`
export const AnimationFadeInLeft = css`
  animation: ${fadeInLeft} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`;



const fadeInRight = keyframes`
  0% {
    transform: translateX(200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`
export const AnimationFadeInRight = css`
  animation: ${fadeInRight} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`;



const pulsate = keyframes`
   0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
            transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
`
export const Animationpulsate = css`
  animation: ${pulsate} 0.5s ease-in-out infinite both;
`


export const FadeInDiv = styled.div`
  opacity: 0;
  &.visibleFadeInbottom {
    ${AnimationFadeInBottom}
  }
  &.visibleFadeInleft {
    ${AnimationFadeInLeft}
  }
  &.visibleFadeInright {
    ${AnimationFadeInRight}
  }
`;
