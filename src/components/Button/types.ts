import { TouchableOpacityProps } from 'react-native'
import { SpacingProps, ColorProps, BorderProps, FlexboxProps } from 'styled-system'

type OwnProps = {
  text: string
  isSecondary?: boolean
}

export type Props = OwnProps & TouchableOpacityProps & SpacingProps & ColorProps & BorderProps & FlexboxProps
