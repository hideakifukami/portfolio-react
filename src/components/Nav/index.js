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
                <C.NavLink>inicio</C.NavLink>
                <C.NavLink>projetos</C.NavLink>
                <C.NavLink>sobre-mim</C.NavLink>
            </C.Nav>
        </C.HeaderInner>
    </C.Container>
  )
}

export default Nav