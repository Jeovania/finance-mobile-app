import React from 'react'
import { SafeAreaView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Container, Button, Text } from '../../components'
import { Props } from './types'

const Home: React.FC<Props> = ({ navigation }: Props) => {
  const { t } = useTranslation(['home', 'common'])

  return (
    <SafeAreaView>
      <Container>
        <Text>{t('title')}</Text>
        <Button onPress={(): void => navigation.push('MyCards')}>
          <Text>Ir para meus cartões</Text>
        </Button>
      </Container>
    </SafeAreaView>
  )
}

export default Home
