import styled from "styled-components";

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
`
export const PSubtitle = styled.p `
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
