import styled from "styled-components";
import { AnimationFadeInBottom } from "../../components/animations/animationsStyles";

export const Container = styled.div `
    width : 100%;
`
// Header
export const Header = styled.header `
    display: flex;
    width: 100%;
    height: 100px;
    padding: 15px 0 15px 0;
    align-items: center;
    justify-content: space-around;
`
export const Logo = styled.img `
    max-width: auto;
    height: 80px;
`

export const SectionButtons = styled.section `
    display: flex;
    gap:10px
`

export const highLightText = styled.span`
    color: var(--highLight);
`
export const Main = styled.main`
   
`
export const SectionHighLight = styled.section`
   display: flex;
   width: 100%;
   flex-direction: column;
   align-items: center;
   height: max-content;
   padding-bottom: 1rem;
`

export const SectionAdvantages = styled.section`
    padding: 3rem 0 3rem 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 70px;
    height: max-content

`

export const SubtitleSection = styled.section `
    width: 75%;
    font-size: 18px;
    color: var(--subtitle_silver);
    text-align: center;
`


