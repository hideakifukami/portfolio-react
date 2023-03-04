import styled from "styled-components";
import { colorData } from "../../data";

export const Project = styled.div`
    border: 1px solid ${colorData.gray};
`

export const ProjectImage = styled.img`
    border-bottom: 1px solid ${colorData.gray};
    aspect-ratio: 16/9;
`   

export const ProjectTechs = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px 16px;
    color: ${colorData.gray};
    padding: 8px;
    border-bottom: 1px solid ${colorData.gray};
`

export const ProjectTech = styled.li`

`

export const ProjectContent = styled.div`
    padding: 16px;
`

export const ProjectName = styled.div`
    font-size: 24px;
    font-weight: 500;
`

export const ProjectDescription = styled.div`
    color: ${colorData.gray};
    margin: 16px 0;
`

export const ProjectLinks = styled.div`
    display: flex;
    gap: 8px;
`

export const ProjectButton = styled.a`
    display: inline-block;
    padding: 8px 16px;
    border: 1px solid ${colorData.primary};
    font-weight: 500;

    :hover {
        background-color: ${colorData.primaryOp};
    }
`