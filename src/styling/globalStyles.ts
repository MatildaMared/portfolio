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
    @media (max-width: 900px) {
      font-size: var(--font-size-h1-tablet);
    }
    @media (max-width: 500px) {
        font-size: var(--font-size-h1-mobile);
    }
  }

  h2 {
    font-size: var(--font-size-h2);
    @media (max-width: 900px) {
      font-size: var(--font-size-h2-tablet);
    }
    @media (max-width: 500px) {
      font-size: var(--font-size-h2-mobile);
    }
  }

  h3 {
    font-size: var(--font-size-h3);
    @media (max-width: 900px) {
      font-size: var(--font-size-h3-tablet);
    }
    @media (max-width: 500px) {
      font-size: var(--font-size-h3-mobile);
    }
  }

  p {
    line-height: 1.6;
  }
`;

export default GlobalStyles;
