import React from 'react'
import { useField } from 'formik'
import { StyledCleaveInput } from './styles'

interface CardNumberInputProps {
  name: string
  onCardTypeChanged: Function
}

function CardNumberInput({
  name,
  onCardTypeChanged,
}: CardNumberInputProps) {
    const [field, meta] = useField(name)
  return (
    <StyledCleaveInput
      placeholder='Card number'
      options={{
        creditCard: true,
        onCreditCardTypeChanged: (cardType: string) =>
          onCardTypeChanged(cardType),
      }}
      style={{ width: '160px' }}
      {...field}
      error={!!meta.error}
    />
  )
}

export default CardNumberInput
