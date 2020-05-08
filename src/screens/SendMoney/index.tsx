import React from 'react'
import { SafeAreaView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Container, Button, Text, Avatar } from '../../components'
import { Props } from './types'

export default function SendMoney({ navigation }: Props): JSX.Element {
  const { t } = useTranslation(['send_money', 'common'])

  return (
    <SafeAreaView>
      <Container m={4}>
        <Text size="xl" textAlign="center" mb={5}>
          {t('send_money_to', { name: 'Bella Campbell' })}
        </Text>

        <Container bg="gray.3" borderRadius={4} py={4} px={3}>
          <Text textAlign="center" size="lg" isBold>
            {t('common:price', { value: '500' })}
          </Text>
        </Container>

        <Container alignItems="center" my={4}>
          <Avatar imageUrl="https://vuesax.com/avatars/avatar-3.png" size={90} />
        </Container>

        <Button py={4} text={t('confirm_button')} onPress={(): void => navigation.popToTop()} />
      </Container>
    </SafeAreaView>
  )
}
