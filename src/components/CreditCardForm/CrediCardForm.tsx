import React, { useState } from 'react'

import { Formik, Field } from 'formik'
import { StyledForm } from './styles'
import {
  CardNumberInput,
  ExpiryDateInput,
  CardVerificationValueInput,
} from '../inputs'
import CardIcon from './CardIcon'
import { CardType } from './consts'

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

  const [cardType, setCardType] = useState(CardType.UNKNOWN)

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <StyledForm>
        <CardIcon cardType={cardType} />
        <Field name='cardNumber' onCardTypeChanged={setCardType} component={CardNumberInput} />
        <Field name='expiryDate' component={ExpiryDateInput} />
        <Field name='ccv' component={CardVerificationValueInput} />
      </StyledForm>
    </Formik>
  )
}

export default CreditCardForm
