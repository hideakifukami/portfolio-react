import React from 'react'
import Project from '../Project'
import H2 from '../H2'
import * as C from './styles'

const Projects = () => {
  return (
    <C.Projects>
        <C.ProjectsHeader>
            <H2 title="projects"/>
        </C.ProjectsHeader>
        <C.ProjectList>
            <Project />
        </C.ProjectList>
    </C.Projects>
  )
}

export default Projects