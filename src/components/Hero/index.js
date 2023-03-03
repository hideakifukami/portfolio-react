import React from 'react'
import PrimaryButton from '../PrimaryButton'
import * as C from './styles'

const Hero = ({ srcLogo, altLogo, srcImage, altImage, href }) => {
  return (
    <C.Hero>
        <C.HeroContent>
            <C.HeroTitle>
                Hideaki is a 
                <C.HeroTitleSpan> web designer </C.HeroTitleSpan>
                 and 
                <C.HeroTitleSpan> front-end </C.HeroTitleSpan>
                 developer
            </C.HeroTitle>
            <C.HeroDescription>He crafts responsive websites where technologies meet creativity</C.HeroDescription>
            <PrimaryButton />
        </C.HeroContent>
        <C.HeroIllustrations>
            <C.HeroLogo src={srcLogo} alt={altLogo}/>
            <C.HeroImage src={srcImage} alt={altImage}/>
            <C.HeroStatus>
                Currently working on
                <C.HeroStatusLink href={href}> Portfolio</C.HeroStatusLink>
            </C.HeroStatus>
        </C.HeroIllustrations>
    </C.Hero>
  )
}

export default Hero