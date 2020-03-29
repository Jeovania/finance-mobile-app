import { DefaultTheme } from 'styled-components/native'

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: number[]
    colors: {
      primary: string
      secondary: string[]
      gray: string[]
      semantic: {
        success: string
        warning: string
        error: string
        info: string
      }
      black: string
      white: string
    }
    fonts: {
      headings: string
      headingsMedium: string
      body: string
      bodyRegular: string
    }
    fontSizes: number[]
    borderWidths: number[]
    radii: number[]
    opacity: number[]
  }
}

const theme: DefaultTheme = {
  spacing: [0, 4, 8, 12, 16, 24, 32, 40, 44],
  colors: {
    primary: '#733dbf',
    secondary: ['#52b6b0', '#532f80', '#e95582', '#ffbc66'],
    gray: ['#333', '#666', '#999', '#c2c2c2', '#ddd', '#eee', '#f9f9f9'],
    semantic: {
      success: '#00a99d',
      warning: '#fcc14f',
      error: '#ff6c60',
      info: '#3facde',
    },
    black: '#333',
    white: '#fff',
  },
  fonts: {
    headings: 'Quicksand-Bold',
    headingsMedium: 'Quicksand-Medium',
    body: 'Roboto-Medium',
    bodyRegular: 'Roboto-Regular',
  },
  fontSizes: [11, 12, 14, 16, 18, 20, 24, 32, 36],
  borderWidths: [0, 0.5, 1, 2],
  radii: [2, 4, 5, 8, 10, 20],
  opacity: [0, 5, 10, 15, 25, 45, 75, 100],
}

export default theme
