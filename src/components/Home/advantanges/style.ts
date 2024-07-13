import styled from "styled-components";
import { FilledButton } from "../../buttons";

export const Container = styled.div `
    display: flex;
    width: 100%;
    justify-content: center;
    gap:30px;
    flex-wrap: wrap;
`
export const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    @media screen and (max-width:600px){
        width: 250px;
    }
`
export const Image = styled.img `
     @media screen and (max-width:600px){
        width: 250px;
    }
`

export const FilledButtonAdvantange = styled(FilledButton)`
  width: 300px;
  height: 60px; 
  font-size: 1.35rem;
  @media screen and (max-width:600px){
    width: max-content;
    padding: 5px 20px 5px 20px;
  }
`