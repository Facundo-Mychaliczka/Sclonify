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
        
    }
    :root {
            --textColorGray: #bebfc5;
            --bgColorOpacity: rgba(190, 191, 197, 0.3);
        }
    html {
        scroll-behavior: smooth;
    }
`;
