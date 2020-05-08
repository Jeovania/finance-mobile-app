import { TouchableOpacityProps } from 'react-native'

type OwnProps = {
  icon: React.ReactElement
  title: string
}

export type Props = OwnProps & TouchableOpacityProps
