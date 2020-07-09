import { TouchableOpacityProps } from 'react-native'
import { SpacingProps, ColorProps, FlexboxProps, PositionProps } from 'styled-system'

type OwnProps = {
  icon: React.ReactElement
  title: string
  isActive?: boolean
}

export type Props = OwnProps & TouchableOpacityProps & SpacingProps & ColorProps & FlexboxProps & PositionProps
