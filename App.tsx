import React from 'react'

import { StatusBar } from 'expo-status-bar'

import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'
import { NavigateProvider } from './src/contexts/NavigateContext'

export default function App() {
  return (
    <NavigationContainer>
      <NavigateProvider>
        <StatusBar style={'light'} />
        <Routes />
      </NavigateProvider>
    </NavigationContainer>
  )
}
