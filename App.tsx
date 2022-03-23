import React, { useEffect, useState } from 'react'

import { StatusBar } from 'expo-status-bar'

import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'
import { NavigateProvider } from './src/contexts/NavigateContext'

import * as Updates from 'expo-updates'

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { AuthRoutes } from './src/routes/AuthRoutes'

export default function App() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser)

    return subscriber
  }, [])

  useEffect(() => {
    const updateApp = async () => {
      const { isAvailable } = await Updates.checkForUpdateAsync()

      if (isAvailable) {
        await Updates.fetchUpdateAsync()

        await Updates.reloadAsync()
      }
    }

    // updateApp()
  }, [])

  return (
    <NavigationContainer>
      <NavigateProvider>
        <StatusBar style={'light'} />
        {user ? <Routes /> : <AuthRoutes />}
      </NavigateProvider>
    </NavigationContainer>
  )
}
