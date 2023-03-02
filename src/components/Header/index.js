import React from 'react'
import { mediaIcons } from '../../data'
import MediaLinks from '../MediaLinks'
import Nav from '../Nav'
import * as C from './styles'

const Header = () => {
  return (
    <C.Header>
        <C.MediaHeader>
            <C.MediaHeaderLine />
            <C.MediaHeaderLinks>
                <MediaLinks href={mediaIcons.linkedin.href} src={mediaIcons.linkedin.src} alt={mediaIcons.linkedin.alt} />
                <MediaLinks href={mediaIcons.github.href} src={mediaIcons.github.src} alt={mediaIcons.github.alt} />
                <MediaLinks href={mediaIcons.email.href} src={mediaIcons.email.src} alt={mediaIcons.email.alt} />
            </C.MediaHeaderLinks>
        </C.MediaHeader>
        <Nav />
    </C.Header>
  )
}

export default Header