import { createGlobalStyle } from "styled-components";
import { colorData, fontData } from "../data";

const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
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
`

export default Global