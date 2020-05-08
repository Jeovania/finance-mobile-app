import { ViewProps } from 'react-native'

type OwnProps = {
  flagImageUrl: string
  icon: React.ReactElement
  title: string
  value: string
  size: 'large' | 'small'
  cardNumber?: string
}

export type Props = OwnProps & ViewProps
