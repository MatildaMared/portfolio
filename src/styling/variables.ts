import { createGlobalStyle } from "styled-components";

const Variables = createGlobalStyle`
  :root {
    // ### COLOR VARIABLES ###

    --color-background: hsla(0, 0%, 15%, 1.0);
    --color-light: hsla(0, 0%, 85%, 1.0);
    --color-gray: hsla(0, 0%, 60%, 1.0);

    --color-orange: hsla(28, 70%, 66%, 1.0);
    --color-pink: hsla(349, 66%, 72%, 1.0);
    --color-purple: hsla(281, 60%, 70%, 1.0);
    --color-blue: hsla(184, 45%, 65%, 1.0);

    --gradient: linear-gradient(90deg, var(--color-orange) 0%, var(--color-pink) 30%, var(--color-purple) 60%, var(--color-blue) 100%);
    --gradient-vertical: linear-gradient(180deg, var(--color-orange) 0%, var(--color-pink) 30%, var(--color-purple) 60%, var(--color-blue) 100%);

    // ### WIDTH VARIABLES ###

    --max-width: 1000px;

    // ### FONT VARIABLES ###

    --font-primary: "Raleway", sans-serif;
    --font-secondary: "Fira Code", monospace;

    --font-size-h1: 4.209rem;
    --font-size-h2: 3.157rem;
    --font-size-h3: 2.369rem;

    --font-size-h1-tablet: 3.1rem;
    --font-size-h2-tablet: 2.3rem;
    --font-size-h3-tablet: 1.3rem;

    --font-size-h1-mobile: 2.6rem;
    --font-size-h2-mobile: 1.8rem;
    --font-size-h3-mobile: 1.2rem;

    --font-size-base: 16px;

    --font-size-small: 0.75rem;

  }
`;

export default Variables;
