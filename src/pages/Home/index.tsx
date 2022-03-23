import { Text } from 'react-native'
import { Container, Button, ButtonText } from './style'

import auth from '@react-native-firebase/auth'
import { useNavigate } from '../../contexts/NavigateContext'

export const Home: React.FC = () => {
  const { navigateToSale } = useNavigate()

  const handleSignOut = () => {
    auth().signOut()
  }

  return (
    <Container>
      <Button onPress={handleSignOut}>
        <ButtonText>LogOut</ButtonText>
      </Button>
      <Button onPress={navigateToSale}>
        <ButtonText>Sale</ButtonText>
      </Button>
    </Container>
  )
}
