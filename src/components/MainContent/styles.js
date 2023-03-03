import styled from "styled-components";

export const Content = styled.main`
    max-width: 1024px;
    margin: 0 auto;
    position: relative;
    margin-top: 112px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 112px;

    @media (max-width: 1024px) {
        padding: 16px;
    }
`