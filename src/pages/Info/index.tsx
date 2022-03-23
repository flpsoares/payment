import { useNavigate } from '../../contexts/NavigateContext'
import { Container, Button, ButtonText, Input } from './style'

import firestore from '@react-native-firebase/firestore'

import MercadoPagoApi from '../../services/MercadoPagoApi'
import { useState } from 'react'
import { Alert } from 'react-native'

interface SaleInfoProps {
  additional_info: {
    items: {
      description: string
      title: string
      unit_price: string
    }
  }
  external_reference: string
  payer: {
    first_name: string
    last_name: string
    email: string
  }
  payment_type_id: string
  status: string
}

export const Info: React.FC = () => {
  const { navigateToHome } = useNavigate()

  const [id, setId] = useState('1246963642')
  const [saleInfo, setSaleInfo] = useState<SaleInfoProps>()

  const SeeInfo = () => {
    console.log(saleInfo)
  }

  const getInfo = () => {
    MercadoPagoApi.saleInfo(id)
      .then((res) => setSaleInfo(res))
      .catch((error) => {
        console.log(error)
      })
  }

  const handleSubmit = () => {
    if (saleInfo !== undefined && saleInfo.status === 'approved') {
      console.log('exec')
    } else {
      console.log('n')
    }
  }
  return (
    <Container>
      <Button onPress={SeeInfo}>
        <ButtonText>See Info</ButtonText>
      </Button>
      <Button onPress={getInfo}>
        <ButtonText>Get Info</ButtonText>
      </Button>
      <Button onPress={handleSubmit}>
        <ButtonText>Send</ButtonText>
      </Button>
      <Input
        placeholderTextColor="#999"
        placeholder="ID"
        onChangeText={setId}
        value={id}
      />
    </Container>
  )
}
