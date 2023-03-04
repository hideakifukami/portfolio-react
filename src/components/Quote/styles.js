import styled from "styled-components";
import { colorData } from "../../data";

export const Quote = styled.figure`
    border: 1px solid ${colorData.gray};
    position: relative;
    display: inline-block;
    margin: 0;

    ::before, ::after {
        content: '"';
        position: absolute;
        color: ${colorData.gray};
        font-size: 64px;
        font-weight: 700;
        background-image: linear-gradient(${colorData.background}, ${colorData.background});
        background-size: 100% 40%;
        background-repeat: no-repeat;
    }   

    ::before {
        top: -32px;
        left: 16px;
    }
    
    ::after {
        bottom: -64px;
        right: 16px;
    }
`

export const QuoteText = styled.blockquote`
    padding: 32px;
    font-size: 24px;
    font-weight: 500;
    background-color: ${colorData.background};
`

export const QuoteAuthor = styled.figcaption`
    position: absolute;
    color: ${colorData.gray};
    border: 1px solid ${colorData.gray};
    padding: 8px;
    right: -1px;
    font-size: 16px;

    ::before {
        content: "- ";
    }
`