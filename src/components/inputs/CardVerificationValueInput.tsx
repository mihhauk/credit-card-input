import React from 'react'
import Cleave from 'cleave.js/react'
import { StyledInput } from './styles'
import { Field } from 'formik'

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
