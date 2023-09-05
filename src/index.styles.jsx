import { createGlobalStyle } from 'styled-components';

export const colors = {
    white: '#FFFFFF',
    shadyLady: '#AEADAE',
    codGray: '#121212',
    gossip: '#B9FBC0',
    koromiko: '#FFBF69',
    spray: '#8EECF5',
    iceCold: '#98F5E1',
    apricotPeach: '#FAC9B8',
    cherub: '#F1C0E8',
};

export const filterColors = {
    gossip: '#B9FBC0',
    koromiko: '#FFBF69',
    spray: '#8EECF5',
    iceCold: '#98F5E1',
    apricotPeach: '#FAC9B8',
    cherub: '#F1C0E8',
};

export const GlobalStyles = createGlobalStyle`

:root {
    --theme-background-primary: #FFFFFF;
    --theme-primary: #121212;
    --theme-secondary: #AEADAE;
  }
  
* {
  box-sizing: border-box;
}



html {
    background: var(--theme-background-primary);
    color: var(--theme-primary);
    /* font-family: 'Inter', sans-serif; */
}

/* html.dark {
    color: var(--theme-primary);
} */

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  text-decoration: none;
  color: inherit;
}

`;
