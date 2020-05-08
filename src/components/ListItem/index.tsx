import React from 'react'
import { TouchableOpacity } from 'react-native'
import Container from '../Container'
import Text from '../Text'
import { Props } from './types'

export default function ListItem({ rightContent, title, date, value, ...otherProps }: Props): React.ReactElement {
  return (
    <Container
      activeOpacity={0.7}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      as={TouchableOpacity}
      {...otherProps}>
      <Container flexDirection="row">
        {rightContent}

        <Container>
          <Text size="md" isBold mb={1}>
            {title}
          </Text>
          <Text size="sm" color="gray.1">
            {date}
          </Text>
        </Container>
      </Container>
      <Text size="md" isBold>
        {value}
      </Text>
    </Container>
  )
}
