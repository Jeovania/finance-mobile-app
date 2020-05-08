import { TouchableOpacityProps } from 'react-native'
import { SpacingProps, ColorProps, BorderProps, FlexboxProps } from 'styled-system'

type OwnProps = {
  iconName: string
}

export type Props = OwnProps & TouchableOpacityProps & SpacingProps & ColorProps & BorderProps & FlexboxProps
