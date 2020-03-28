import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from '../../components'
import { Props } from './types'

const SendMoney: React.FC<Props> = ({ navigation }: Props) => {
  const { t } = useTranslation(['send-money', 'common'])

  return <Text>send money</Text>
}

export default SendMoney
