import React from 'react'
import Text from '../Text'
import { StyledCard } from './styles'
import { Props } from './types'

export default function CategoryCard({ title, icon, isActive, ...otherProps }: Props): React.ReactElement {
  const getBackgroundColor = (): string => {
    if (isActive) return 'secondary'
    return 'white'
  }

  const getTextColor = (): string => {
    if (isActive) return 'white'
    return 'gray.0'
  }

  return (
    <StyledCard
      {...otherProps}
      activeOpacity={0.7}
      alignItems="center"
      bg={getBackgroundColor()}
      justifyContent="center">
      {icon}
      <Text textAlign="center" isBold color={getTextColor()} mt={3}>
        {title}
      </Text>
    </StyledCard>
  )
}

CategoryCard.defaultProps = {
  isActive: false,
}
