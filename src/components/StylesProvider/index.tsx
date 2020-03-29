import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import mainTheme from '../Theme'
import { Props } from './types'

/**
 * Add theme context and default theme
 */
const StylesProvider: React.FC<Props> = ({ children, theme }: Props): JSX.Element => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

StylesProvider.defaultProps = {
  children: null,
  theme: mainTheme,
}

export default StylesProvider
