import styled from "styled-components"

export const Separator = styled.div`
    background: linear-gradient(180deg, transparent, #fff, transparent); 
    width: 1px;
    @media screen and (max-width:1085px){
        display: none;
    }
`

export const DegradeSeparator = () => {

    return (
        <Separator>
        </Separator>
    )
}

