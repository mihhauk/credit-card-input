import React from 'react'
import { StyledCleaveInput } from './styles'

function CardNumberInput() {
  return (
    <StyledCleaveInput
      placeholder="Card number"
      options={{ creditCard: true }}
      style={{width: '160px'}}
    />
  )
}

export default CardNumberInput
