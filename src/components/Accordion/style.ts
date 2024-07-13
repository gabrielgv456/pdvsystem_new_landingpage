import styled from "styled-components";

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  font-size: 1.4rem;
`;

export const AccordionItemWrapper = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  height: 80px;
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  padding: 0px;
  height: ${(props) => (props.isOpen ? 'auto' : '0')};
  overflow: hidden;
  transition: height 0.3s ease;
`;
