import React from 'react'

import { Formik, Field } from 'formik'
import { StyledForm } from './styles'
import {
  CardNumberInput,
  ExpiryDateInput,
  CardVerificationValueInput,
} from './inputs'

interface MyFormValues {
  cardNumber: string
  expiryDate: string
  ccv: string
}

function CreditCardForm() {
  const initialValues: MyFormValues = {
    cardNumber: '',
    expiryDate: '',
    ccv: '',
  }

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <StyledForm>
        <Field name='cardNumber' component={CardNumberInput} />
        <Field name='expiryDate' component={ExpiryDateInput} />
        <Field name='ccv' component={CardVerificationValueInput} />
      </StyledForm>
    </Formik>
  )
}

export default CreditCardForm
