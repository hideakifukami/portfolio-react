import styled from "styled-components";

export const MediaLink = styled.a`
    width: 32px;
    aspect-ratio: 1;
    
`

export const MediaIcon = styled.img`
    width: 100%;
    aspect-ratio: 1;
    max-width: 100%;
    display:  block;

    :hover {
        filter: brightness(0) invert(1);
    }
`