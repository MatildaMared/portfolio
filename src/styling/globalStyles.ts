import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-background);
    font-family: var(--font-primary);
    color: var(--color-light);
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
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
    margin-bottom: 1rem;
  }

::-webkit-scrollbar {
  width: 14px;
}

::-webkit-scrollbar-track {
  background: var(--color-background);
}

::-webkit-scrollbar-thumb {
  background: hsla(0, 0%, 25%, 1);
  border: 2px solid var(--color-background);
  border-radius: .5rem;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-gray);
} 
`;

export default GlobalStyles;
