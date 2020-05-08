import React from 'react'
import { StyledButton } from './styles'
import Text from '../Text'
import { Props } from './types'

export default function Button({ text, disabled, isSecondary, ...otherProps }: Props): React.ReactElement {
  const getBackgroundColor = (): string => {
    if (disabled || isSecondary) return 'gray.3'
    return 'secondary'
  }

  const getTextColor = (): string => {
    if (disabled || isSecondary) return 'gray.0'
    return 'white'
  }

  return (
    <StyledButton {...otherProps} disabled={disabled} activeOpacity={0.7} bg={getBackgroundColor()} borderRadius={3}>
      <Text size="md" isBold textAlign="center" color={getTextColor()}>
        {text}
      </Text>
    </StyledButton>
  )
}

Button.defaultProps = {
  isSecondary: false,
}
