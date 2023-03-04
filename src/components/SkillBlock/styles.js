import styled from "styled-components";
import { colorData } from "../../data";

export const SkillBlock = styled.div`
    margin-bottom: 16px;
    border: 1px solid ${colorData.gray};
    display: inline-block;
    max-width: 300px;
    min-width: 200px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
`
export const SkillBlockName = styled.div`
    font-weight: 600;
    padding: 8px;
    border-bottom: 1px solid ${colorData.gray};
`

export const SkillBlockList = styled.ul`
    padding: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: start;
    align-items: start;
    color: ${colorData.gray};
`

export const SkillsBlockListItem = styled.li`

`