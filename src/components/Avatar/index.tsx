import React from 'react'
import { StyledAvatar } from './styles'
import { Props } from './types'

export default function Avatar({ imageUrl, size, ...otherProps }: Props): React.ReactElement {
  return <StyledAvatar {...otherProps} resizeMode="contain" size={size} source={{ uri: imageUrl }} />
}
