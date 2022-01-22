import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: var(--color-background);
    font-family: var(--font-primary);
    color: var(--color-light);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 800;
  }

  h1 {
    font-size: var(--font-size-h1);
  }

  h2 {
    font-size: var(--font-size-h2);
  }

  h3 {
    font-size: var(--font-size-h3);
  }

  h4 {
    font-size: var(--font-size-h4);
  }

  h5 {
    font-size: var(--font-size-h5);
  }

  h6 {
    font-size: var(--font-size-h6);
  }

  p {
    line-height: 1.6;
  }
`;

export default GlobalStyles;
