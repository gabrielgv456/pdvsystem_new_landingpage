import styled from "styled-components"
import { AnimationFadeInBottom } from "./animations/animationsStyles"

export const TitleH1 = styled.h1`
    font-size: 40px;
    font-weight: 600;
    color: var(--title_bold);
    width: 65%;
    text-align: center;
    ${AnimationFadeInBottom};
`
type TitleH2Type = {
    textAlign: 'center' | 'left'
}
export const TitleH2 = styled.h2  <TitleH2Type>`
    font-size: 35px;
    font-weight: 600;
    color: var(--title_bold);
    text-align: ${props => props.textAlign};
`

export const PSubtitle = styled.label `
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    color: var(--subtitle_silver);
`

export const TitleH3 = styled.h3 `
    padding: 0;
    margin: 0;
    font-size: 30px;
    font-weight: 600;
    color: var(--title_bold);
`

export const TitleH4 = styled.h4 `
    font-size: 18px;
    font-weight: 600;
    color:var(--highLight);
`
