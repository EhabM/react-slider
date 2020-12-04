import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.font};
    color: white;
    outline: 0;

  }

  *,
  *::before,
  *::after {
      box-sizing: inherit;
  }

html {
    box-sizing: border-box;
    font-size: 62.5%; 

  }

  a {
      text-decoration: none;
    }

  body {
    width: 100%;
    height:  100%;

    background-color: ${(props) => props.theme.bgColor};
    margin: 0;
    padding: 0;
    transition: all 1s ease-in-out;
 }
 
`;

export default GlobalStyle;
