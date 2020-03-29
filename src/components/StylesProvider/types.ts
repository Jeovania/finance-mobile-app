import { DefaultTheme } from 'styled-components'

export interface OwnProps {
  /** React nodes for app */
  children?: React.ReactNode
  /** Custom theme */
  theme?: DefaultTheme
}

export type Props = OwnProps
