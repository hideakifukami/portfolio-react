import styled from "styled-components";
import { colorData } from "../../data";

export const Header = styled.header`
    padding-top: 32px;
    padding-bottom: 8px;
    background-color: ${colorData.background};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    display: block;
`

export const MediaHeader = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 16px;
    gap: 8px;
    top: 0px;
`

export const MediaHeaderLine = styled.span`
    width: 1px;
    height: 33vh;
    background-color: ${colorData.gray};
    display: block;
`

export const MediaHeaderLinks = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
`