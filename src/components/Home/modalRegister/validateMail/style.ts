import styled from "styled-components";
import { darken } from 'polished'
import { MdMarkEmailRead } from "react-icons/md";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:2rem;
    justify-content: center;
    align-items: center;
    height: max-content;
    font-size: 1.1rem;
`
export const LabelMail = styled.div `
    display: flex;
    gap:10px;
    align-items: center; 
    background-color: var(--transparent_highLight);
    border-radius: 5px;
    padding: 10px;
`
export const LabelTip = styled.div `
    font-size:0.75rem;
    display: flex;
    justify-content: center;
    gap:5px;
`
export const Input = styled.input`
    outline-color: var(--highLight);
    border-radius: 5px;
    border: none;
    height: 2.5rem;
    width: 90%;
    text-align: center;
    font-size: 1rem;
    letter-spacing: 10px;
`
export const ButtonClose = styled.button`
    background-color: #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    position: absolute;
    color: gray;
    top:-10px;
    right:-8px;
    font-size: 0.9rem;
    border: 1px solid var(--highLight);
    &:hover{
        background-color:  ${darken(0.02, `#fff`)};
        color: #000;
    }
`
export const ButtonConfirm = styled.button`
    background-color: var(--highLight);
    border-radius: 5px;
    color: #fff;
    padding: 0.7rem;
    font-size: 1rem;
    width: max-content;
    &:hover{
        background-color: var(--highLightDarken)
    }
`


export const highLightText = styled.span`
    color: var(--highLight);
`

export const mailIcon = styled(MdMarkEmailRead)`
    color: var(--highLight)
`