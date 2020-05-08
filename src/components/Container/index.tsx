import React from 'react'
import { StyledContainer } from './styles'
import { Props } from './types'

export default function Container({ children, ...otherProps }: Props): React.ReactElement {
  return <StyledContainer {...otherProps}>{children}</StyledContainer>
}
