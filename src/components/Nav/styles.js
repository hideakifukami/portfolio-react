import styled from "styled-components";
import { colorData } from "../../data";

export const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    position: relative;

    @media (max-width: 1024px) {
        padding: 16px;
    }
`

export const HeaderInner = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    position: relative;
`

export const Nav = styled.nav`
    margin-left: auto;
    display: flex;
    align-items: flex-start;
    gap: 32px;

    @media (max-width: 768px) { 
        display: none;
    }
`

export const NavLink = styled.a`
    color: ${colorData.gray};

    ::before {
        content: "#";
        color: ${colorData.primary};
        font-weight: normal;
    }

    :hover {
        color: ${colorData.white};
    }
`