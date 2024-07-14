import styled from 'styled-components';

export const StyledDialog = styled.dialog`
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 500px;
  
  position: relative;
  padding: 0;
  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width:600px){
        width: 100%;
    }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  color: var(--highLight);
  padding: 2px 0px 0px 4px;
  text-decoration: none;
  outline: none;
  background: #fff;
  border: none;
  cursor: pointer;
`;
