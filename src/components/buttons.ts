import styled from "styled-components";

export const OutLineButton = styled.button `
    background-color: var(--button_outline_bg);
    border-radius: 5px;
    border: 3px solid var(--highLight);
    padding: 0.6rem 0.8rem 0.6rem 0.8rem;
    font-size: 1.2rem;
    width: 120px;
    font-weight: 500;
    color: var(--highLight);
    transition: background-color 0.5s ease;
    &:hover{
        background-color: var(--transparnt_highLight);
    }
`

export const ButtonPrimary = styled.button `
    background-color: var(--button_primary);
    border-radius: 5px;
    padding: 1rem;
    font-size: 1.2rem;
    width: 30%;
    font-weight: 600;
    transition: background-color 0.5s ease;
    color: var(--text_button_primary);
    &:hover{
        background-color: var(--button_primary_darken);
    }
`