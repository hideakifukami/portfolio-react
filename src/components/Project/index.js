import React from 'react'
import * as C from './styles'

const Project = ({ src, alt, techs, name, description, hrefLive, hrefGit }) => {
  return (
    <C.Project>
        <C.ProjectImage src={src} alt={alt} />
        <C.ProjectTechs>
            <C.ProjectTech>{techs}</C.ProjectTech>
        </C.ProjectTechs>
        <C.ProjectContent>
            <C.ProjectName>{name}</C.ProjectName>
            <C.ProjectDescription>{description}</C.ProjectDescription>
            <C.ProjectLinks>
                <C.ProjectButton href={hrefLive}>Live ={">"}</C.ProjectButton>
                <C.ProjectButton href={hrefGit}>Github ={">"}</C.ProjectButton>
            </C.ProjectLinks>
        </C.ProjectContent>
    </C.Project>
  )
}

export default Project