import { TextProps } from 'react-native'
import { SpacingProps } from 'styled-system'

type OwnProps = {
  children: React.ReactNode
  size?: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  isBold?: boolean
  textAlign?: string
}

export type Props = OwnProps & TextProps & SpacingProps
