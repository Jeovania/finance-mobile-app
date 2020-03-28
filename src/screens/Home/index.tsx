import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from '../../components'
import { Props } from './types'

const Home: React.FC<Props> = ({ navigation }: Props) => {
  const { t } = useTranslation(['home', 'common'])

  return <Text>Home</Text>
}

export default Home
