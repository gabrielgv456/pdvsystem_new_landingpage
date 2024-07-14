import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--footer);
    height: min-content;
    padding: 80px 0 80px 0;
    font-size: 1.1rem;
    flex-wrap: wrap;
    @media screen and (max-width:800px){
        justify-content: center;
    }
`
export const Logo = styled.img`
    max-width: auto;
    height: 150px;
    @media screen and (max-width:600px){
        margin-bottom: 20px;
        height: 100px;
    }
`
export const DivColumn = styled.div`
    color: #fff;
    display: flex;
    width: 300px;
    flex-direction: column;
`
export const DivContent = styled.div`
    display: flex;
    gap:30px;
    flex-wrap: wrap;
    @media screen and (max-width:1050px){
        justify-content: center;
    }
`
export const UlSections = styled.ul`
    margin: 0;
    padding: 0;
`

export const liSections = styled.li`
    text-align: left;
    font-size: 1.1rem;
    list-style: none;
    margin:0;
    text-align: left;
    color: #fff;
    border-bottom:1px solid rgba(255,255,255,.08);
    background: none;
    padding: 10px 10px 10px 0;
`
export const GoTo= styled.a`
   cursor: pointer;
   text-decoration: none;
   color: inherit;
   &:hover{
    color: var(--highLight)
   }
`
export const Socials = styled.div`
    display: flex;
    gap:8px;
`

export const Divider = styled.div`
    background: rgba(255,255,255,.3);
    width: 35px;
    height: 3px;
    margin-bottom: 20px;
`