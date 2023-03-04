import React from 'react'
import { skillsData } from '../../data'
import H2 from '../H2'
import SkillBlock from '../SkillBlock'
import * as C from './styles'

const Skills = () => {

  return (
    <C.Skills>
        <H2 title='skills' />
        <C.SkillsContent>
            <C.SkillsList>
                <SkillBlock skillGroup={skillsData.languages.skillGroup} skills={skillsData.languages.skills} />
                <SkillBlock skillGroup={skillsData.frameworks.skillGroup} skills={skillsData.frameworks.skills} />
                <SkillBlock skillGroup={skillsData.other.skillGroup} skills={skillsData.other.skills} />
            </C.SkillsList>
        </C.SkillsContent>
    </C.Skills>
  )
}

export default Skills