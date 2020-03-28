import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from '../../components'
import { Props } from './types'

const MyCards: React.FC<Props> = ({ navigation }: Props) => {
  const { t } = useTranslation(['my-cards', 'common'])

  return <Text>My cards</Text>
}

export default MyCards
