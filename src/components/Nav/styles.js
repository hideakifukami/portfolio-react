import styled from "styled-components";
import { colorData } from "../../data";

export const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    position: relative;
`

export const HeaderInner = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    position: relative;
`

export const Logo = styled.a`
    display: flex;
    gap: 8px;
    text-decoration: none;
    color: inherit;

`

export const LogoImg = styled.img`
    aspect-ratio: 1;
    width: 16px;
    max-width: 100%;
    display: block;
`


export const LogoName = styled.p`
`

export const Nav = styled.nav`
    margin-left: auto;
    display: flex;
    align-items: flex-start;
    gap: 32px;
`

export const NavLink = styled.a`
    color: ${colorData.gray};
    text-decoration: none;

    ::before {
        content: "#";
        color: ${colorData.primary};
        font-weight: normal;
    }
`