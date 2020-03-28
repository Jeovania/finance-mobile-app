import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type StackParamList = {
  Home: undefined
  MyCards: undefined
  SendMoney: undefined
}

export type NavProps<T extends keyof StackParamList> = {
  navigation: StackNavigationProp<StackParamList, T>
  route: RouteProp<StackParamList, T>
}
