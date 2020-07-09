import React from 'react'
import Container from '../Container'
import { Props } from './types'

export default function AvatarGroup({ children }: Props): React.ReactElement {
  return (
    <Container flexDirection="row" flex={1}>
      {React.Children.map(
        children,
        (child): React.ReactNode => (
          <Container key={child.id} flexDirection="row-reverse">
            {React.cloneElement(child, { mr: -18, borderWidth: 3, size: 55 })}
          </Container>
        ),
      )}
    </Container>
  )
}
