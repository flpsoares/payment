import React, { createContext, useContext, ReactNode } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../routes/RootStackParamsList'

interface NavigateContextData {
  navigateToRegister: () => void
  navigateToLogin: () => void
  navigateToHome: () => void
  navigateToSale: () => void
  navigateToInfo: () => void
}

interface NavigateProviderProps {
  children: ReactNode
}

type RegisterScreenProps = NativeStackNavigationProp<RootStackParamsList, 'Register'>
type LoginScreenProps = NativeStackNavigationProp<RootStackParamsList, 'Login'>
type HomeScreenProps = NativeStackNavigationProp<RootStackParamsList, 'Home'>
type SaleScreenProps = NativeStackNavigationProp<RootStackParamsList, 'Sale'>
type InfoScreenProps = NativeStackNavigationProp<RootStackParamsList, 'Info'>

export const NavigateContext = createContext({} as NavigateContextData)

export const NavigateProvider = ({ children }: NavigateProviderProps) => {
  const navigationRegister = useNavigation<RegisterScreenProps>()
  const navigationLogin = useNavigation<LoginScreenProps>()
  const navigationHome = useNavigation<HomeScreenProps>()
  const navigationSale = useNavigation<SaleScreenProps>()
  const navigationInfo = useNavigation<InfoScreenProps>()

  const navigateToRegister = () => {
    navigationRegister.navigate('Register')
  }
  const navigateToLogin = () => {
    navigationLogin.navigate('Login')
  }
  const navigateToHome = () => {
    navigationHome.navigate('Home')
  }
  const navigateToSale = () => {
    navigationSale.navigate('Sale')
  }
  const navigateToInfo = () => {
    navigationInfo.navigate('Info')
  }

  return (
    <NavigateContext.Provider
      value={{
        navigateToRegister,
        navigateToLogin,
        navigateToHome,
        navigateToSale,
        navigateToInfo
      }}
    >
      {children}
    </NavigateContext.Provider>
  )
}

export const useNavigate = () => {
  return useContext(NavigateContext)
}
