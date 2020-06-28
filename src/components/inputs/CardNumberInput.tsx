import React from 'react'
import { StyledCleaveInput } from './styles'

interface CardNumberInputProps {
  onCardTypeChanged(cardType: string): void
}

function CardNumberInput({ onCardTypeChanged }: CardNumberInputProps) {
  return (
    <StyledCleaveInput
      placeholder='Card number'
      options={{
        creditCard: true,
        onCreditCardTypeChanged: (cardType: string) =>
          onCardTypeChanged(cardType),
      }}
      style={{ width: '160px' }}
    />
  )
}

export default CardNumberInput
