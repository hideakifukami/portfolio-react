import React from 'react'
import * as C from './style'

const Logo = ({ srcLogo, altLogo, logoName }) => {
  return (
    <C.Logo>
        <C.LogoImg src={srcLogo} alt={altLogo}/>
        <C.LogoName>{logoName}</C.LogoName>
    </C.Logo>  
    )
}

export default Logo