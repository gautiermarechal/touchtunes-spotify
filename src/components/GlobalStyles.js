// globalStyles.js
import { createGlobalStyle } from "styled-components";
import { COLORS } from "../constants";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${COLORS.black};
    font-family: 'Chivo', sans-serif;
    a{
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
