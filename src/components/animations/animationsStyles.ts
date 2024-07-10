import { css, styled } from 'styled-components';


export const AnimationFadeInBottom = css`
	-webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

    @-webkit-keyframes fade-in-bottom {
        0% {
            -webkit-transform: translateY(50px);
            transform: translateY(50px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
        }
    }
    @keyframes fade-in-bottom {
    0% {
        -webkit-transform: translateY(50px);
                transform: translateY(50px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        opacity: 1;
    }
    }
`;

export const Animationpulsate = css`
    -webkit-animation: pulsate-fwd 0.5s ease-in-out infinite both;
	animation: pulsate-fwd 0.5s ease-in-out infinite both;
    @-webkit-keyframes pulsate-fwd {
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
}
@keyframes pulsate-fwd {
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
}

`

export const FadeInDiv = styled.div`
  opacity: 0;
  &.visibleFadeIn {
    ${AnimationFadeInBottom}
  }
`;
