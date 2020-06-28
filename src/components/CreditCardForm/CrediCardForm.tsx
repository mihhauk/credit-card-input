import React, { useState } from 'react'
import moment from 'moment'
import { Formik, FormikErrors } from 'formik'
import { StyledForm } from './styles'
import {
  CardNumberInput,
  ExpiryDateInput,
  CardVerificationValueInput,
} from '../inputs'
import CardIcon from './CardIcon'
import { CardType } from './consts'

interface FormValues {
  cardNumber: string
  expiryDate: string
  ccv: string
}

function validate(values: FormValues): FormikErrors<FormValues> {
  let errors: FormikErrors<FormValues> = {}

  if (values.expiryDate.length === 5) {
    const date = moment(values.expiryDate, 'MM/YY')
    if (date.isBefore(moment())) {
      errors.expiryDate = 'expiry date cannot be in the past'
    }
  }

  return errors
}

function CreditCardForm() {
  const initialValues: FormValues = {
    cardNumber: '',
    expiryDate: '',
    ccv: '',
  }

  const [cardType, setCardType] = useState(CardType.UNKNOWN)

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={() => {}}
    >
      <StyledForm>
        <CardIcon cardType={cardType} />
        <CardNumberInput name='cardNumber' onCardTypeChanged={setCardType} />
        <ExpiryDateInput name='expiryDate' />
        <CardVerificationValueInput name='ccv' />
      </StyledForm>
    </Formik>
  )
}

export default CreditCardForm
