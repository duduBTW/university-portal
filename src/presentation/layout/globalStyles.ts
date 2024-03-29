import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
    font-family: Nunito;
    -ms-overflow-style:none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }


  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }
  
  h1, h2, h3, h4, p {
    margin: 0;
    padding: 0;
  }

  :root {
    --text-900: rgba(0, 0, 0, 0.92);
    --text-800: rgba(0, 0, 0, 0.82);
    --text-700: rgba(0, 0, 0, 0.72);
    --text-600: rgba(0, 0, 0, 0.62);

    --brand: #C0081E;
    --brand-light: rgba(192, 8, 30, 0.24);
  }
`;

export default GlobalStyle;
