import styled from "styled-components";
import { colorData } from "../../data";

export const Footer = styled.footer`
    max-width: inherit;
    width: 100%;
    border-top: 1px solid ${colorData.gray};
    padding-top: 32px;
    margin-bottom: 16px;
`

export const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    position: relative;

    @media (max-width: 1024px) {
        padding: 16px;
    }
`

export const FooterInner = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 32px;
    margin-bottom: 48px;
`

export const FooterInfo = styled.div`

`

export const FooterHeader = styled.div`
    display: flex;
    gap: 32px;
`

export const FooterEmail = styled.a`
    color: ${colorData.gray};

    :hover {
        color: ${colorData.white};
    }
`

export const FooterDescription = styled.p`
    margin-top: 16px;
`

export const FooterMedia = styled.div`

`

export const FooterTitle = styled.div`
    font-weight: 500;
    font-size: 24px;
`

export const FooterList = styled.div`
    display: flex;
    gap: 8px;
`

export const FooterCopyright = styled.div`
    color: ${colorData.gray};
    text-align: center;
`