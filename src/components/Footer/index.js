import React from 'react'
import { logoImage, mediaIcons } from '../../data'
import Logo from '../Logo'
import MediaLinks from '../MediaLinks'
import * as C from './styles'

const Footer = ({ hrefEmail, email, description, title, copyright }) => {
  return (
    <C.Footer>
        <C.Container>
            <C.FooterInner>
                <C.FooterInfo>
                    <C.FooterHeader>
                        <Logo srcLogo={logoImage.logo} altLogo='Logotipo' logoName='Hideaki Fukami' />
                        <C.FooterEmail href={hrefEmail}>{email}</C.FooterEmail>
                    </C.FooterHeader>
                    <C.FooterDescription>{description}</C.FooterDescription>
                </C.FooterInfo>
                <C.FooterMedia>
                    <C.FooterTitle>{title}</C.FooterTitle>
                    <C.FooterList>
                        <MediaLinks href={mediaIcons.linkedin.href} src={mediaIcons.linkedin.src} alt={mediaIcons.linkedin.alt} />
                        <MediaLinks href={mediaIcons.github.href} src={mediaIcons.github.src} alt={mediaIcons.github.alt} />
                        <MediaLinks href={mediaIcons.email.href} src={mediaIcons.email.src} alt={mediaIcons.email.alt} />
                    </C.FooterList>
                </C.FooterMedia>
            </C.FooterInner>
            <C.FooterCopyright>{copyright}</C.FooterCopyright>
        </C.Container>
    </C.Footer>
  )
}

export default Footer