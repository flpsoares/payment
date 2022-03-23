import { useNavigate } from '../../contexts/NavigateContext'
import { Container, Button, ButtonText } from './style'

import { WebView } from 'react-native-webview'
import { useState } from 'react'
import { View } from 'react-native'
import MercadoPagoApi from '../../services/MercadoPagoApi'
import { api } from '../../services/api'

export const Sale: React.FC = () => {
  const { navigateToHome, navigateToInfo } = useNavigate()

  const [isOpen, setIsOpen] = useState(false)
  const [url, setUrl] = useState('')

  const handleSale = (month: number) => {
    MercadoPagoApi.createPreference(month).then((res) => {
      setUrl(res.data.body.sandbox_init_point)
      setIsOpen(true)
    })
  }

  if (isOpen && url) {
    return (
      <WebView
        source={{
          uri: url
        }}
      />
    )
  }

  return (
    <Container>
      <Button onPress={() => handleSale(1)}>
        <ButtonText>Comprar 1 mês</ButtonText>
      </Button>
      <Button onPress={() => handleSale(3)}>
        <ButtonText>Comprar 3 meses</ButtonText>
      </Button>
      <Button onPress={() => handleSale(6)}>
        <ButtonText>Comprar 6 meses</ButtonText>
      </Button>
      <Button onPress={() => handleSale(12)}>
        <ButtonText>Comprar 1 ano</ButtonText>
      </Button>
      <Button onPress={navigateToInfo}>
        <ButtonText>Info</ButtonText>
      </Button>
      <Button onPress={navigateToHome}>
        <ButtonText>Home</ButtonText>
      </Button>
    </Container>
  )
}
