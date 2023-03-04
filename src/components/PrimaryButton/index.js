import React from 'react'
import * as C from './styles'

const PrimaryButton = ({ href }) => {
  return (
    <C.Button target='_blank' href={href}>Entre em Contato ##</C.Button>
  )
}

export default PrimaryButton