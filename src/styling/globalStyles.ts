import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: var(--color-background);
    font-family: var(--font-primary);
    color: var(--color-light);
  }
`;

export default GlobalStyles;
