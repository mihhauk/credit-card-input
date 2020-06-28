import React from 'react'
import { UnknownCard, Amex, Visa, Mastercard, DinersClub, Jcb, Discover } from '../icons'
import { StyledCardIcon } from './styles'
import { CardType } from './consts'

const cardIcons: Map<CardType, any> = new Map([
  [CardType.VISA, Visa],
  [CardType.AMEX, Amex],
  [CardType.MASTERCARD, Mastercard],
  [CardType.DINERS_CLUB, DinersClub],
  [CardType.JCB, Jcb],
  [CardType.DISCOVER, Discover],
])

interface CardIconProps {
  cardType: CardType
}

function CardIcon({ cardType }: CardIconProps) {
  console.log(cardType)
  const Icon = cardIcons.get(cardType)|| UnknownCard

  return (
    <StyledCardIcon>
      <Icon
        height='20px'
        width='20px'
        style={{ display: 'block', margin: 'auto' }}
      />
    </StyledCardIcon>
  )
}

export default CardIcon
