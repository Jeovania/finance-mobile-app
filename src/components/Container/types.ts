import { ViewProps } from 'react-native'
import { SpacingProps, ColorProps, FlexboxProps, PositionProps, BorderProps } from 'styled-system'

type OwnProps = {
  children: React.ReactNode
}

export type Props = OwnProps & ViewProps & SpacingProps & ColorProps & FlexboxProps & PositionProps & BorderProps
