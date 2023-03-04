import React from 'react'
import { heroData } from '../../data'
import Hero from '../Hero'
import Projects from '../Projects'
import Quote from '../Quote'
import Skills from '../Skills'
import * as C from './styles'

const MainContent = () => {
  return (
        <C.Content>
            <Hero srcImage={heroData.image.src} altImage={heroData.image.alt}/>
            <Quote />
            <Projects />
            <Skills />
        </C.Content>
    )
}

export default MainContent