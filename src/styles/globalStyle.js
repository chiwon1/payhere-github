import ReseterCSS from "reseter.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${ReseterCSS};

  * {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: auto;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.color.background};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input {
    appearance: none;
    outline: none;
  }

  input, button {
    border: none;
    outline: none;
  }

  ol, ul, li {
    list-style: none;
  }
`;

export default GlobalStyle;
