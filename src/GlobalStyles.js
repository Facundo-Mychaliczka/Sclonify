import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration: none;
        align-items: center;
        text-align: center;
        /* COLOR DE TEXTO  */
        /* color: #bebfc5; */
    }
    html {
        scroll-behavior: smooth;
    }
`;
