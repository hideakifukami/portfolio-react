import styled from "styled-components";
import { colorData } from "../../data";

export const H2 = styled.h2`
    font-size: 32px;
    font-weight: 500;
    position: relative;
    float: none;
    clear: both;
    display: inline-block;

    ::before {
        content: "#";
        color: ${colorData.primary};
    }

    ::after {
        content: "";
        display: block;
        width: 10vw;
        height: 1px;
        background-color: ${colorData.primary};
        position: absolute;
        transform: translate(100%, -50%);
        right: -16px;
        top: 50%;
    }
`