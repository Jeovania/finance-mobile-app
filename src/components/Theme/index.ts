import { DefaultTheme } from 'styled-components/native'

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: number[]
    colors: {
      primary: string
      secondary: string
      gray: string[]
      black: string
      white: string
    }
    fonts: {
      bold: string
      light: string
    }
    fontSizes: number[]
    radii: number[]
  }
}

const theme: DefaultTheme = {
  spacing: [0, 4, 8, 12, 16, 24, 32, 40, 44],
  colors: {
    primary: '#6e21d1',
    secondary: '#e55f91',
    gray: ['#333', '#666', '#d1d1d1', '#f1f1f1'],
    black: '#000',
    white: '#fff',
  },
  fonts: {
    bold: 'Montserrat-Bold',
    light: 'Montserrat-Regular',
  },
  fontSizes: [12, 16, 18, 28, 32, 48],
  radii: [4, 8, 12, 16, 18, 20, 40],
}

export default theme
