import React from 'react'
import * as C from './styles'

const Nav = () => {
  return (
    <C.Container>
        <C.HeaderInner>
            <C.Logo>
                <C.LogoImg />
                <C.LogoName>Hideaki Fukami</C.LogoName>
            </C.Logo>
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