import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #0a192f; /* Dark background */
    color: #ccd6f6; /* Light text color */
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
