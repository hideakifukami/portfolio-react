import styled from "styled-components";
import { colorData } from "../../data";

export const Button = styled.a`
    display: inline-block;
    padding: 8px 16px;
    border: 1px solid ${colorData.primary};
    font-weight: 500;

    :hover { 
        background-color: ${colorData.primaryOp};
    }
`