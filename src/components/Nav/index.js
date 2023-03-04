import React from 'react'
import { logoImage } from '../../data'
import Logo from '../Logo'
import * as C from './styles'

const Nav = () => {
  return (
    <C.Container>
        <C.HeaderInner>
            <Logo srcLogo={logoImage.logo} altLogo='Logotipo' logoName='Hideaki Fukami'/>
            <C.Nav>
                <C.NavLink>home</C.NavLink>
                <C.NavLink>projects</C.NavLink>
                <C.NavLink>about-me</C.NavLink>
            </C.Nav>
        </C.HeaderInner>
    </C.Container>
  )
}

export default Nav