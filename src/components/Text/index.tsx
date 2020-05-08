import React from 'react'
import { StyledText } from './styles'
import { Props } from './types'

export default function TextComponent({
  size,
  isBold,
  opacity,
  children,
  textAlign,
  ...otherProps
}: Props): JSX.Element {
  return (
    <StyledText {...otherProps} size={size} isBold={isBold} textAlign={textAlign} opacity={opacity}>
      {children}
    </StyledText>
  )
}

TextComponent.defaultProps = {
  size: 'sm',
  isBold: false,
  textAlign: 'left',
  color: '#333',
  opacity: 1,
}
