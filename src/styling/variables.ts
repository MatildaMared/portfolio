import { createGlobalStyle } from "styled-components";

const Variables = createGlobalStyle`
  :root {
    --color-background: hsla(0, 0%, 15%, 1.0);
    --color-light: hsla(0, 0%, 85%, 1.0);
    --color-gray: hsla(0, 0%, 60%, 1.0);

    --color-orange: hsla(28, 70%, 66%, 1.0);
    --color-pink: hsla(349, 66%, 72%, 1.0);
    --color-purple: hsla(281, 60%, 70%, 1.0);
    --color-blue: hsla(184, 45%, 65%, 1.0);

    --gradient: linear-gradient(90deg, var(--color-orange) 0%, var(--color-pink) 30%, var(--color-purple) 60%, var(--color-blue) 100%);
    --gradient-vertical: linear-gradient(180deg, var(--color-orange) 0%, var(--color-pink) 30%, var(--color-purple) 60%, var(--color-blue) 100%);

    --max-width: 1000px;

    --font-primary: "Raleway", sans-serif;
    --font-secondary: "Fira Code", monospace;

    --font-size-h1: 4.209rem;
    --font-size-h2: 3.157rem;
    --font-size-h3: 2.369rem;
    --font-size-h4: 1.777rem;
    --font-size-h5: 1.333rem;
    --font-size-h6: 1.111rem;

    --font-size-base: 16px;

    --font-size-small: 0.75rem;

  }
`;

export default Variables;
