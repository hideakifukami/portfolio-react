import React from 'react'
import * as C from './styles'

const PrimaryButton = ({ href }) => {
  return (
    <C.Button target='_blank' href={href}>Contact Me ##</C.Button>
  )
}

export default PrimaryButton