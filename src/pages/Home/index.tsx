import { TouchableOpacity, Text } from 'react-native'
import { Container } from './style'

import auth from '@react-native-firebase/auth'

export const Home: React.FC = () => {
  const handleSignOut = () => {
    auth().signOut()
    console.log('executou')
  }

  return (
    <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#999',
          padding: 20
        }}
        onPress={handleSignOut}
      >
        <Text>LogOut</Text>
      </TouchableOpacity>
    </Container>
  )
}
