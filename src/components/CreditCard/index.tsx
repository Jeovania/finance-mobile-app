import React from 'react'
import { View } from 'react-native'
import Text from '../Text'
import { Props } from './types'

export default function Container({
  flagImageUrl,
  icon,
  title,
  value,
  size,
  cardNumber,
  ...otherProps
}: Props): React.ReactElement {
  return (
    <View {...otherProps}>
      {flagImageUrl}
      <Text>{title}</Text>
      <Text>{value}</Text>
      {cardNumber && <Text>{cardNumber}</Text>}
    </View>
  )
}
