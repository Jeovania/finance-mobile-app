import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StackParamList } from './types'

import Home from '../screens/Home'
import MyCards from '../screens/MyCards'
import SendMoney from '../screens/SendMoney'

const Stack = createStackNavigator<StackParamList>()

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyCards" component={MyCards} />
        <Stack.Screen name="SendMoney" component={SendMoney} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
