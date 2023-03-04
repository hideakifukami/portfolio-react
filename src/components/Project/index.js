import React from 'react'
import * as C from './styles'

const Project = ({ src, alt, techs, name, description, hrefLive, hrefGit }) => {
  return (
    <C.Project>
        <C.ProjectImage src={src} alt={alt} />
        <C.ProjectTechs>
            <C.ProjectTech>{techs.tech1}</C.ProjectTech>
            <C.ProjectTech>{techs.tech2}</C.ProjectTech>
            <C.ProjectTech>{techs.tech3}</C.ProjectTech>
            <C.ProjectTech>{techs.tech4}</C.ProjectTech>
        </C.ProjectTechs>
        <C.ProjectContent>
            <C.ProjectName>{name}</C.ProjectName>
            <C.ProjectDescription>{description}</C.ProjectDescription>
            <C.ProjectLinks>
                <C.ProjectButton target='_blank' href={hrefLive}>Live ={">"}</C.ProjectButton>
                <C.ProjectButton target='_blank' href={hrefGit}>Github ={">"}</C.ProjectButton>
            </C.ProjectLinks>
        </C.ProjectContent>
    </C.Project>
  )
}

export default Project