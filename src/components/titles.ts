import styled from "styled-components"
import { AnimationFadeInBottom } from "./animations/animationsStyles"

export const TitleH1 = styled.h1`
    font-size: 40px;
    font-weight: 600;
    color: var(--title_bold);
    width: 65%;
    text-align: center;
    ${AnimationFadeInBottom};
    @media screen and (max-width:600px){
        width: 96%;
    }
`
type TitleH2Type = {
    $textalign?: 'center' | 'left'
}
export const TitleH2 = styled.h2  <TitleH2Type>`
    font-size: 35px;
    font-weight: 600;
    color: var(--title_bold);
    text-align: ${props => props.$textalign ? props.$textalign : 'left'}

`

export const PSubtitle = styled.label`
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    color: var(--subtitle_silver);
`

export const TitleH3 = styled.h3`
    padding: 0;
    margin: 0;
    font-size: 30px;
    font-weight: 600;
    color: var(--title_bold);
`

export const TitleH4 = styled.h4 <{ $color: '--highLight' | '--title_bold', $textAlign?: 'center' | 'left' }> `
    font-size: 20px;
    margin: 0;
    font-weight: 600;
    color:${props => 'var(' + props.$color + ')'};
    text-align: ${props=>props.$textAlign ? props.$textAlign : 'left'};
`
