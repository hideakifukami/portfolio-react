import styled from "styled-components";
import { colorData } from "../../data";

export const HamburgerInput = styled.input`
    width: 32px;
    margin: 0;
    aspect-ratio: 1;
    position: absolute;
    cursor: pointer;
    right: 8px;
    top: 32px;
    z-index: 9999;
    display: none;
    appearance: none;

    ::before, ::after {
        content: "";
        width: 100%;
        height: 2px;
        position: absolute;
        top: 30%;
        background-color: ${colorData.gray};
        transition: all 0.2s ease;
    }

    ::after {
        width: 75%;
        top: 70%;
        right: 0;
    }

    @media (max-width: 768px) {
        display: block;

        :checked {
            ::after {
                transform: translateY(-50%) rotateZ(45deg);
                width: 100%;
                top: 50%;
            }

            ::before {
                transform: translateY(-50%) rotateZ(-45deg);
                top: 50%;
            }
            
        }
    }

    
`   