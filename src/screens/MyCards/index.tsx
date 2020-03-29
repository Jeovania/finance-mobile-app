import React from 'react'
import { SafeAreaView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Container, Button, Text } from '../../components'
import { Props } from './types'

const MyCards: React.FC<Props> = ({ navigation }: Props) => {
  const { t } = useTranslation(['my-cards', 'common'])

  return (
    <SafeAreaView>
      <Container>
        <Text>{t('title')}</Text>
        <Button onPress={(): void => navigation.push('SendMoney')}>
          <Text>Enviar dinheiro</Text>
        </Button>
      </Container>
    </SafeAreaView>
  )
}

export default MyCards
