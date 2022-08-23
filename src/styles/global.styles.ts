import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto",sans-serif;
    }
    a{
        text-decoration: none;
    }
    body{
       background-color: #E5E5E5;
        height: 100vh;
    }
`