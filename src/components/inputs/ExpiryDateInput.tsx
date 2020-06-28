import React from 'react'
import { StyledCleaveInput } from './styles'
import { useField } from 'formik'

interface CardExpiryInputProps {
  name: string
}

function ExpiryDateInput({ name }: CardExpiryInputProps) {
  const [field, meta] = useField(name)
  return (
    <StyledCleaveInput
      placeholder='MM/YY'
      options={{ date: true, datePattern: ['m', 'y'] }}
      style={{ width: '60px' }}
      {...field}
      error={!!meta.error}
    />
  )
}

export default ExpiryDateInput
