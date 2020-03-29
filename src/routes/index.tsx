import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StackParamList } from './types'

import Home from '../screens/Home'
import MyCards from '../screens/MyCards'
import SendMoney from '../screens/SendMoney'

const Stack = createStackNavigator<StackParamList>()

function Routes(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: '#fff' } }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyCards" component={MyCards} />
        <Stack.Screen name="SendMoney" component={SendMoney} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
