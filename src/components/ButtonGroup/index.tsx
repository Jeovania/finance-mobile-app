import React from 'react'
import Container from '../Container'
import { Props } from './types'

export default function ButtonGroup({ children }: Props): React.ReactElement {
  return (
    <Container flexDirection="row" flex={1}>
      {React.Children.map(
        children,
        (child, i: number): React.ReactNode => (
          <Container key={child.id} flex={1}>
            {React.cloneElement(child, {
              mr: i + 1 < React.Children.count(children) ? 2 : 0,
              ml: i !== 0 ? 2 : 0,
              py: 3,
            })}
          </Container>
        ),
      )}
    </Container>
  )
}
