import React from 'react'
import { SafeAreaView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Container, Button, Text } from '../../components'
import { Props } from './types'

const SendMoney: React.FC<Props> = ({ navigation }: Props) => {
  const { t } = useTranslation(['send-money', 'common'])

  return (
    <SafeAreaView>
      <Container>
        <Text>{t('title')}</Text>
        <Button onPress={(): void => navigation.popToTop()}>
          <Text>Voltar para Home</Text>
        </Button>
      </Container>
    </SafeAreaView>
  )
}

export default SendMoney
