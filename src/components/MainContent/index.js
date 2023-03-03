import React from 'react'
import { heroData } from '../../data'
import Hero from '../Hero'
import * as C from './styles'

const MainContent = () => {
  return (
        <C.Content>
            <Hero srcLogo={heroData.logo.src} altLogo={heroData.logo.alt} srcImage={heroData.image.src} altImage={heroData.image.alt}/>
        </C.Content>
    )
}

export default MainContent