import styled from "styled-components";

export const Projects = styled.section`

`

export const ProjectsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 48px;
`

export const ProjectList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
    align-items: start;
    margin-top: 48px;
`
