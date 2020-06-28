import styled, { css } from 'styled-components'
import Cleave from 'cleave.js/react'

const inputStyle = (error: boolean) => css`
  font-size: 16px;
  border: none;
  outline: none;
  padding: 4px;

  ${error && errorStyle}
`

export const StyledCleaveInput = styled(Cleave)<InputProps>`
  ${(props) => inputStyle(props.error)}
`

const errorStyle = css`
  color: red;
`

interface InputProps {
  error: boolean
}

export const StyledInput = styled.input<InputProps>`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ${(props) => inputStyle(props.error)}
`
