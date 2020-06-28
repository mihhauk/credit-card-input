import React from 'react'
import UnknownCard from './icons/UnknownCard'
import { StyledCardIcon } from './styles'

function CardIcon() {
  return (
    <StyledCardIcon>
      <UnknownCard
        height='20px'
        width='20px'
        style={{ display: 'block', margin: 'auto' }}
      />
    </StyledCardIcon>
  )
}

export default CardIcon
