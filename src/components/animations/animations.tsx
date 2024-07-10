import React, { ReactNode } from 'react';
import { FadeInDiv } from './animationsStyles';
import useIntersectionObserver from '../../hooks/useInterSectionObserver';

interface FadeInComponentProps {
  children: ReactNode;
}

const FadeInComponent: React.FC<FadeInComponentProps> = ({ children }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return <FadeInDiv ref={ref} className={isVisible ? 'visibleFadeIn' : ''}>{children}</FadeInDiv>;
};

export default FadeInComponent;
