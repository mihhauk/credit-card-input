import React from 'react'
import { StyledCleaveInput } from './styles'

function ExpiryDateInput() {
  return (
    <StyledCleaveInput
      placeholder='MM/YY'
      options={{ date: true, datePattern: ['m', 'y'] }}
      style={{ width: '60px' }}
    />
  )
}

export default ExpiryDateInput
