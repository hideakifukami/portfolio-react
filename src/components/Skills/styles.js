import styled from "styled-components";

export const Skills = styled.section`
    width: 100%;
`

export const SkillsContent = styled.div`
    padding: 30px 0;
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
`

export const SkillsList = styled.div`
    column-gap: 16px;
    columns: 3;
    flex: 1 1 0;

    @media (max-width: 768px) { 
        columns: 2;
    }

    @media (max-width: 500px) {
        columns: 1;
    }
`