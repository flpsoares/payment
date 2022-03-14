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
export const Login: React.FC = () => {
  const { navigateToRegister } = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
      <Button>
        <ButtonText>Login</ButtonText>
      </Button>
      <ForgotPasswordButton onPress={navigateToRegister}>
        <ForgotPasswordButtonText>Create account</ForgotPasswordButtonText>
      </ForgotPasswordButton>
    </Container>
  )
}
