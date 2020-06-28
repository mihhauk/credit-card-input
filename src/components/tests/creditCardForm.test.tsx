import React from 'react'
import {
  render,
  fireEvent,
  findByPlaceholderText,
  waitForDomChange,
} from '@testing-library/react'
import CreditCardForm from '../CreditCardForm'

describe('Crdit card input', () => {
  test('renders input for card number', () => {
    const { getByPlaceholderText, findByPlaceholderText } = render(
      <CreditCardForm />
    )

    expect(getByPlaceholderText('Card number')).toBeInTheDocument()
  })

  test('renders input for expiry date', () => {
    const { getByPlaceholderText } = render(<CreditCardForm />)

    expect(getByPlaceholderText('MM/YY')).toBeInTheDocument()
  })

  test('renders input for card verification code', () => {
    const { getByPlaceholderText } = render(<CreditCardForm />)

    expect(getByPlaceholderText('CVC')).toBeInTheDocument()
  })

  // ToDo: fix this test
  //firing event on cleave input is throwing TypeError: Cannot read property 'slice' of undefined
  test.skip('show error when date in in a past', () => {
    const { getByPlaceholderText } = render(<CreditCardForm />)
    const expiryDateInput = getByPlaceholderText('MM/YY') as HTMLInputElement
    let style = window.getComputedStyle(expiryDateInput)
    expect(style.color).toEqual('')

    fireEvent.change(expiryDateInput, { target: { value: '11/22' } })
  })
})
