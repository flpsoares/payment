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
import { useState } from 'react'
import { Alert } from 'react-native'

export const Register: React.FC = () => {
  const { navigateToLogin } = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = () => {}

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
      <InputItem>
        <InputTitle>Confirm Password</InputTitle>
        <Input
          placeholder="Confirm Password"
          placeholderTextColor="#999999"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
      </InputItem>
      <Button onPress={handleSubmit}>
        <ButtonText>Register</ButtonText>
      </Button>
      <ForgotPasswordButton onPress={navigateToLogin}>
        <ForgotPasswordButtonText>Already have an account?</ForgotPasswordButtonText>
      </ForgotPasswordButton>
    </Container>
  )
}
