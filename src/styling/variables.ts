import { createGlobalStyle } from "styled-components";

const Variables = createGlobalStyle`
  :root {
    --color-background: hsla(0, 0%, 15%, 1.0);
    --color-light: hsla(0, 0%, 85%, 1.0);

    --color-orange: hsla(28, 70%, 66%, 1.0);
    --color-pink: hsla(349, 66%, 72%, 1.0);
    --color-purple: hsla(281, 60%, 70%, 1.0);
    --color-blue: hsla(184, 45%, 65%, 1.0);

    --gradient: linear-gradient(90deg, var(--color-orange) 0%, var(--color-pink) 30%, var(--color-purple) 60%, var(--color-blue) 100%);



    --font-primary: "Raleway", sans-serif;
    --font-secondary: "Fira Code", monospace;

  }
`;

export default Variables;
