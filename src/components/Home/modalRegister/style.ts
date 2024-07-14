import styled from "styled-components";
import { stepType } from "./ModalRegister";

export const DivForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--highLight);
`
export const DivTitleForm = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 1.3rem;
    padding: 1rem 0 1rem 0;
`
export const DivContentForm = styled.div<{ $step: stepType }>`
    background-color: #fff;
    display: flex;
    border-radius: 30px 30px 0 0;
    gap:1rem;
    padding: 20px;
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;
    align-items: ${props => props.$step === 'success' ? 'center' : ''};
`
export const DivItemForm = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
`
export const LabelInputForm = styled.label`
    width: 100%;
    font-size: 0.75rem;
`
export const InputForm = styled.input`
    width: 100%;
    text-decoration: none;
    border: none;
    border-radius:5px;
    height: 1.8rem;
    font-size: 0.8rem;
    outline: none;
    background-color: var(--background_input);
    &::placeholder{
        font-size: 0.8rem;
        color: var(--subtitle_silver);
    }
    &:focus{
        background-color: var(--transparent_highLight);
        &::placeholder{
            color: var(--highLight)
        }
    }
`

export const ButtonForm = styled.button`
    margin: 0 auto;
    background-color: var(--highLight);
    border-radius: 13px;
    padding: 0.7rem;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text_button_primary);
    transition: background-color 0.5s ease;
    &:hover{
        background-color: var(--highLightDarken);
    }
`
export const DivButtonForm = styled.div`
    padding: 1rem 0 0 0;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const SpanAlreadyRegistered = styled.span`
    margin: 0 auto;
    font-size: 0.75rem;
`
export const SubTitle = styled.p`
    font-size: 0.8rem;
    color: #fff;
    margin: 0 0 25px 0;
`
export const Title = styled.h3`
    font-size: 1.5rem;
    color: #fff;
    margin: 15px 0 5px 0; 
`

export const highLightText = styled.span`
    color: var(--highLight);
`
export const DivSuccess = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`
export const SuccessImage = styled.img`
    width: 400px;

    @media screen and (max-width: 500px) {
        width: 250px;
    }
`