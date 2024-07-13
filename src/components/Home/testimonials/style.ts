import styled from "styled-components";
import { ImQuotesLeft } from "react-icons/im";

export const Container = styled.div `
    height: max-content;
    background-color: var(--light_highLight);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 50px 10px 50px 10px ;
    justify-content: space-around;
`
export const DivLeft = styled.div `
    width: 600px;
`
export const DivRight = styled.div `
    display: flex;
    width: 700px;
    flex-direction: column;

`
export const QuoteIcon = styled(ImQuotesLeft)`
    color: var(--highLight);
    margin-right: 5px;
`

export const Testimonial = styled.label`
    color: var(--subtitle_silver);
`
export const DivCustomer = styled.div`
    display: flex;
    gap:10px;
`

export const ImgCustomer = styled.img`
    border-radius:50%;
    width: 50px;
    height: 50px;
`
export const SpanCustumer = styled.span`
    display: flex;
    flex-direction: column;
`
export const TestimonialContainer = styled.div`
    padding: 25px 0 25px 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
`