import { createGlobalStyle } from 'styled-components'
import { darken } from 'polished'


export const GlobalStyle = createGlobalStyle`

:root {
    --background: #fff;
    --title_bold : #2E2E2E;
    --subtitle_silver: #6C6C6C;
    --highLight: #9900CC;
    --highLightDarken: ${darken(0.05,'#9900CC')};;
    --transparent_highLight:#ECCFF5; 
    --transpartent_highLightDarken: ${darken(0.2,'#ECCFF5')};
    --light_highLight: #EDE7F6;
    --button_primary:#33CC95;
    --button_primary_darken: ${darken(0.03,'#33CC95')};
    --text_button_primary: #FFF;
    --button_outline_bg: #fff;
    --footer: #282828;
}

html {
  @media (max-width:1080px){
    font-size:93.75%;
  }
  @media (max-width: 720px) {
    font-size:87.5%;
  }
}

button{
  cursor:pointer;
  text-decoration: none;
  border: none;
  background: none;
  font-family: "Work Sans", sans-serif;;
}

[disabled]{
  opacity:0.6;
  cursor:not-allowed;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--background); 
  font-family: "Work Sans", sans-serif;;
}

footer{
  background-color: var(--background); 

}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}

`