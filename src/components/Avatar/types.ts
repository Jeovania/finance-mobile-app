import { SpacingProps, BorderProps } from 'styled-system'

type OwnProps = {
  imageUrl: string
  size: number
}

export type Props = OwnProps & SpacingProps & BorderProps
