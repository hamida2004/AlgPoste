import React from 'react'
import { colors } from '../asstes/styles'
import styled from 'styled-components'

export const CustomParagraph = ({content}) => {
    const Text = styled.p`
    color:${colors.grey}
    `
  return (
   <Text>{content}</Text>
  )
}
