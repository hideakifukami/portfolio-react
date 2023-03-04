import React from 'react'
import { heroData } from '../../data'
import Hero from '../Hero'
import Projects from '../Projects'
import Quote from '../Quote'
import * as C from './styles'

const MainContent = () => {
  return (
        <C.Content>
            <Hero srcImage={heroData.image.src} altImage={heroData.image.alt}/>
            <Quote />
            <Projects />
        </C.Content>
    )
}

export default MainContent