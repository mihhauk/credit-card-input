import React from 'react'
import { StyledInput } from './styles'

function CardVerificationValueInput() {
  return (
    <StyledInput
      placeholder='CVC'
      type='tel'
      maxLength={3}
      style={{ width: '40px' }}
    />
  )
}

export default CardVerificationValueInput
