import React, { createContext, useContext, ReactNode } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../routes/RootStackParamsList'

interface NavigateContextData {
  navigateToRegister: () => void
  navigateToLogin: () => void
}

interface NavigateProviderProps {
  children: ReactNode
}

type RegisterScreenProps = NativeStackNavigationProp<RootStackParamsList, 'Register'>
type LoginScreenProps = NativeStackNavigationProp<RootStackParamsList, 'Login'>

export const NavigateContext = createContext({} as NavigateContextData)

export const NavigateProvider = ({ children }: NavigateProviderProps) => {
  const navigationRegister = useNavigation<RegisterScreenProps>()
  const navigationLogin = useNavigation<LoginScreenProps>()

  const navigateToRegister = () => {
    navigationRegister.navigate('Register')
  }
  const navigateToLogin = () => {
    navigationLogin.navigate('Login')
  }

  return (
    <NavigateContext.Provider value={{ navigateToRegister, navigateToLogin }}>
      {children}
    </NavigateContext.Provider>
  )
}

export const useNavigate = () => {
  return useContext(NavigateContext)
}
