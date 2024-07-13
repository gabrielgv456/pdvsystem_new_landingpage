import React, { useState } from 'react';
import * as S from './style'
import { IoIosArrowDown } from "react-icons/io";

export interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <S.AccordionSection>
      {items.map((item, index) => (
        <S.AccordionItemWrapper key={index} isOpen={openIndex === index}>
          <S.AccordionHeader onClick={() => toggleAccordion(index)}  isOpen={openIndex === index}>
            {item.title}
            <IoIosArrowDown size={25}/>
          </S.AccordionHeader>
          <S.AccordionContent isOpen={openIndex === index}>
            {item.content}
          </S.AccordionContent>
         
        </S.AccordionItemWrapper>
      ))}
    </S.AccordionSection>
  );
};

