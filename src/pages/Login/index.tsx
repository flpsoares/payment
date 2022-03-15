import { useState } from 'react'
import { useNavigate } from '../../contexts/NavigateContext'
import {
  Container,
  Button,
  Input,
  InputItem,
  InputTitle,
  Title,
  ButtonText,
  ForgotPasswordButton,
  ForgotPasswordButtonText
} from './style'

import auth from '@react-native-firebase/auth'

import { Alert } from 'react-native'

export const Login: React.FC = () => {
  const { navigateToRegister } = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    if (email !== '' && password !== '') {
      auth()
        .signInWithEmailAndPassword(email, password)
        .catch(() => Alert.alert('Warning', 'Incorrect email or password.'))
    } else {
      Alert.alert('Warning', 'Fill in all fields')
    }
  }

  return (
    <Container>
      <Title>Payment</Title>
      <InputItem>
        <InputTitle>Email</InputTitle>
        <Input
          placeholder="Email"
          placeholderTextColor="#999999"
          onChangeText={setEmail}
          value={email}
        />
      </InputItem>
      <InputItem>
        <InputTitle>Password</InputTitle>
        <Input
          placeholder="Password"
          placeholderTextColor="#999999"
          onChangeText={setPassword}
          value={password}
        />
      </InputItem>
      <Button onPress={handleSignIn}>
        <ButtonText>Login</ButtonText>
      </Button>
      <ForgotPasswordButton onPress={navigateToRegister}>
        <ForgotPasswordButtonText>Create account</ForgotPasswordButtonText>
      </ForgotPasswordButton>
    </Container>
  )
}
