import React from 'react'
import { TouchableOpacity } from 'react-native'
import Text from '../Text'
import { Props } from './types'

export default function CategoryCard({ title, icon, ...otherProps }: Props): React.ReactElement {
  return (
    <TouchableOpacity {...otherProps}>
      {icon}
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}
