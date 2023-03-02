import React from 'react'
import * as C from './styles'


const MediaLinks = ({ href, src, alt }) => {
  return (
    <>
        <C.MediaLink href={href}>
            <C.MediaIcon src={src} alt={alt}/>
        </C.MediaLink>
    </>
  )
}

export default MediaLinks