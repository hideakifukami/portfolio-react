import React from 'react'
import PrimaryButton from '../PrimaryButton'
import * as C from './styles'

const Hero = ({ srcImage, altImage, href }) => {
  return (
    <C.Hero>
        <C.HeroContent>
            <C.HeroTitle>
                Hideaki Fukami é um desenvolvedor de 
                <C.HeroTitleSpan> software </C.HeroTitleSpan>
                 e 
                <C.HeroTitleSpan> front-end</C.HeroTitleSpan>
            </C.HeroTitle>
            <C.HeroDescription>Construindo soluções criativas para a resolução de problemas.</C.HeroDescription>
            <PrimaryButton href='https://wa.me/5511952119987' />
        </C.HeroContent>
        <C.HeroIllustrations>
            <C.HeroImage src={srcImage} alt={altImage}/>
            <C.HeroStatus>
                Projeto atual:
                <C.HeroStatusLink href={href}> Portfolio</C.HeroStatusLink>
            </C.HeroStatus>
        </C.HeroIllustrations>
    </C.Hero>
  )
}

export default Hero