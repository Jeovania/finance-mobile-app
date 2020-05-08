import React from 'react'
import { StyledButton } from './styles'
import Text from '../Text'
import { Props } from './types'

export default function AddFavoriteButton(props: Props): React.ReactElement {
  return (
    <StyledButton
      {...props}
      bg="white"
      borderWidth={2}
      activeOpacity={1}
      borderStyle="dashed"
      justifyContent="center"
      borderColor="primary">
      <Text size="xl" textAlign="center" color="primary">
        +
      </Text>
    </StyledButton>
  )
}
