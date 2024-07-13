import React, { ReactNode } from 'react';
import { FadeInDiv } from './animationsStyles';
import useIntersectionObserver from '../../hooks/useInterSectionObserver';

interface FadeInComponentProps {
  children: ReactNode;
  type: FadeInType
}

export type FadeInType = 'bottom' | 'left' | 'right'


export const FadeInComponent: React.FC<FadeInComponentProps> = ({ children, type }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  return <FadeInDiv ref={ref} className={isVisible ? 'visibleFadeIn' + type : ''}>{children}</FadeInDiv>;
};
