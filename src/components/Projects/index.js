import React from 'react'
import Project from '../Project'
import H2 from '../H2'
import * as C from './styles'
import { ProjectData } from '../../data'

const Projects = () => {
  return (
    <C.Projects>
        <C.ProjectsHeader>
            <H2 title="projects"/>
        </C.ProjectsHeader>
        <C.ProjectList>
            <Project src={ProjectData.project1.src} alt={ProjectData.project1.alt} techs={ProjectData.project1.techs} name={ProjectData.project1.name} description={ProjectData.project1.description} hrefLive={ProjectData.project1.hrefLive} hrefGit={ProjectData.project1.hrefGit} />
            <Project src={ProjectData.project2.src} alt={ProjectData.project2.alt} techs={ProjectData.project2.techs} name={ProjectData.project2.name} description={ProjectData.project2.description} hrefLive={ProjectData.project2.hrefLive} hrefGit={ProjectData.project2.hrefGit} />
            <Project src={ProjectData.project3.src} alt={ProjectData.project3.alt} techs={ProjectData.project3.techs} name={ProjectData.project3.name} description={ProjectData.project3.description} hrefLive={ProjectData.project3.hrefLive} hrefGit={ProjectData.project3.hrefGit} />
        </C.ProjectList>
    </C.Projects>
  )
}

export default Projects