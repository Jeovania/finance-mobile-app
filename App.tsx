/* eslint-disable global-require */
import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import * as Font from 'expo-font'
import { ThemeProvider } from 'styled-components/native'
import './src/i18n'
import Routes from './src/routes'
import theme from './src/components/Theme'

const App: React.FC = () => {
  const [isFontLoaded, setFontLoaded] = useState(false)

  const loadFonts = async (): any => {
    await Font.loadAsync({
      'Montserrat-Bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
    })

    setFontLoaded(true)
  }

  useEffect(() => {
    loadFonts()
  }, [])

  return <ThemeProvider theme={theme}>{isFontLoaded ? <Routes /> : <ActivityIndicator />}</ThemeProvider>
}

export default App
