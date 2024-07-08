import styled from "styled-components";

export const Container = styled.div `
    width : 100%;
`
// Header
export const Header = styled.header `
    display: flex;
    width: 100%;
    height: 100px;
    padding: 15px;
    align-items: center;
    justify-content: space-around;
`
export const Logo = styled.img `
    max-width: auto;
    height: 80px;
`

// Main
export const highLightText = styled.span `
    color: var(--highLight);
`
export const Main = styled.main `
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`

export const TitleH1 = styled.h1 `
    font-size: 40px;
    font-weight: 600;
    color: var(--title_bold);
    width: 70%;
    text-align: center;
`

export const SubtitleSection = styled.section `
    width: 70%;
    font-size: 18px;
    color: var(--subtitle_silver);
    text-align: center;
`
export const buttonPrimary = styled.button `
    background-color: var(--button_primary);
    border-radius: 5px;
    padding: 1rem;
    font-size: 1.2rem;
    width: 30%;
    font-weight: 600;
    color: var(--text_button_primary);
`

