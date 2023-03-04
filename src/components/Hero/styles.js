import styled from "styled-components";
import { colorData } from "../../data";

export const Hero = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
    flex-wrap: wrap;
`

export const HeroContent = styled.div`
    flex: 1 1 0;
`

export const HeroTitle = styled.h1`
    min-width: 300px;
    font-size: 32px;
    font-weight: 600;

`

export const HeroTitleSpan = styled.span`
    color: ${colorData.primary};
`

export const HeroDescription = styled.div`
    color: ${colorData.gray};
    margin-top: 32px;
    margin-bottom: 32px;
`

export const HeroIllustrations = styled.div`
    flex: 1 1 0;
    position: relative;
    display: flex;
    flex-direction: column;
`

export const HeroImage = styled.img`
    position: relative;
    z-index: 2;
    border-bottom: 1px solid ${colorData.primary};
`

export const HeroStatus = styled.div`
    padding: 8px;
    border: 1px solid ${colorData.gray};
    color: ${colorData.gray};
    margin: 0 auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -1px;
    z-index: 5;
    gap: 8px;
    font-weight: 500;

    ::before {
        content: "";
        display: inline-block;
        aspect-ratio: 1;
        width: 16px;
        background-color: ${colorData.primaryOp};
        border: 1px solid ${colorData.primary};
    }
`

export const HeroStatusLink = styled.a`
    color: ${colorData.white};
    text-decoration: underline;

    :hover {
        color: ${colorData.primary}
    }
`
