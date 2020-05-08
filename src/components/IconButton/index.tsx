import React from 'react'
import { StyledButton } from './styles'
import Text from '../Text'
import { Props } from './types'

export default function IconButton({ iconName, ...otherProps }: Props): React.ReactElement {
  return (
    <StyledButton {...otherProps} activeOpacity={0.7} bg="white" borderRadius={2}>
      <Text size="lg" color="primary">
        {iconName}
      </Text>
    </StyledButton>
  )
}
