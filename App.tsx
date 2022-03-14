import React, { useEffect } from 'react'

import { StatusBar } from 'expo-status-bar'

import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'
import { NavigateProvider } from './src/contexts/NavigateContext'

import * as Updates from 'expo-updates'

export default function App() {
  useEffect(() => {
    const updateApp = async () => {
      const { isAvailable } = await Updates.checkForUpdateAsync()

      if (isAvailable) {
        await Updates.fetchUpdateAsync()

        await Updates.reloadAsync()
      }
    }

    updateApp()
  }, [])

  return (
    <NavigationContainer>
      <NavigateProvider>
        <StatusBar style={'light'} />
        <Routes />
      </NavigateProvider>
    </NavigationContainer>
  )
}
