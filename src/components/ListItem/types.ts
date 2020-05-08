import { TouchableOpacityProps } from 'react-native'

type OwnProps = {
  title: string
  date: string
  value: string
  rightContent?: React.ReactElement
}

export type Props = OwnProps & TouchableOpacityProps
