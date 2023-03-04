import React from 'react'
import * as C from './styles'


const MediaLinks = ({ href, src, alt }) => {
  return (
    <>
        <C.MediaLink target='_blank' href={href}>
            <C.MediaIcon src={src} alt={alt}/>
        </C.MediaLink>
    </>
  )
}

export default MediaLinks