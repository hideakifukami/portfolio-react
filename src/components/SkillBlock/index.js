import React from 'react'
import * as C from './styles'

const SkillBlock = ({ skillGroup, skills }) => {
  return (
    <C.SkillBlock>
      <C.SkillBlockName>{skillGroup}</C.SkillBlockName>
      <C.SkillBlockList>
          <C.SkillsBlockListItem>{skills.item1}</C.SkillsBlockListItem>
          <C.SkillsBlockListItem>{skills.item2}</C.SkillsBlockListItem>
          <C.SkillsBlockListItem>{skills.item3}</C.SkillsBlockListItem>
          <C.SkillsBlockListItem>{skills.item4}</C.SkillsBlockListItem>
          <C.SkillsBlockListItem>{skills.item5}</C.SkillsBlockListItem>
          <C.SkillsBlockListItem>{skills.item6}</C.SkillsBlockListItem>

      </C.SkillBlockList>
    </C.SkillBlock>
  )
}

export default SkillBlock