import { createGlobalStyle } from "styled-components";
import { colorData, fontData } from "../data";

const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    body, html {
    background-color: ${colorData.background};
    color: ${colorData.white};
    font-family: ${fontData.fontPrimary};
    display: flex;
    gap: 112px;
    flex-direction: column;
    }

    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
    }  

    img, picture {
        max-width: 100%;
        display: block;
    }

    input, button, textarea, select {
        font: inherit;
    }


    button {
        appearance: none;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
`

export default Global