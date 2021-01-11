// globalStyles.js
import { createGlobalStyle } from "styled-components";
import { COLORS } from "../constants";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${COLORS.black};
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyle;
