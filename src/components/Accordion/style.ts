import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  font-size: 1.4rem;
`;

export const AccordionItemWrapper = styled.div<{ $isOpen: boolean }>`
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  height: ${(props) => (props.$isOpen ? 'auto' : '80px')};
`;

export const AccordionHeader = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 10px 0 10px 0;
  width: 100%;
  gap:5px;
  cursor: pointer;
  color: ${props => props.$isOpen ?  'var(--highLight)' : ''};
`;

export const AccordionContent = styled.div<{ $isOpen: boolean }>`
  margin: 0 auto;
  width: 90%;
  font-size: 1rem;
  padding: 10px;
  height: ${(props) => (props.$isOpen ? 'auto' : '0')};
  overflow: hidden;
  display: ${props => props.$isOpen ? '' : 'none'};
  transition: height 0.3s ease;
`;

export const DropDownIcon = styled(IoIosArrowDown)`
  min-width: 25px; 
  width: 25px; 
  height: 25px
`
