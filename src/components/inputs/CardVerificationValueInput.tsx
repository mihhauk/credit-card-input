import React from 'react'
import { useField } from 'formik'
import { StyledInput } from './styles'

interface CardVerificationValueInputProps {
  name: string
}

function CardVerificationValueInput({ name }: CardVerificationValueInputProps) {
  const [field, meta] = useField(name)

  return (
    <StyledInput
      placeholder='CVC'
      type='tel'
      maxLength={3}
      style={{ width: '40px' }}
      {...field}
      error={!!meta.error}
    />
  )
}

export default CardVerificationValueInput
