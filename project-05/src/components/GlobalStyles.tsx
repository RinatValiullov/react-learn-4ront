import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100vh;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    background-color: #cee;
    color: #456;
    font-family: 'Roboto Slab', serif;
    font-size: 1.4rem;
    font-weight: 600;
    height: 100%;
    margin: 0;
  }

  a {
    text-transform: uppercase;
    text-decoration: none:
  }
`;

export { GlobalStyles };
