import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../pages/Home'
import { Sale } from '../pages/Sale'
import { Info } from '../pages/Info'

const Stack = createNativeStackNavigator()
export const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Sale" component={Sale} options={{ headerShown: false }} />
      <Stack.Screen name="Info" component={Info} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
