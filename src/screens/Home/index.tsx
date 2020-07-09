import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Container,
  Button,
  Text,
  CreditCard,
  AvatarGroup,
  Avatar,
  AddFavoriteButton,
  ButtonGroup,
} from '../../components'
import { Props } from './types'

export default function Home({ navigation }: Props): JSX.Element {
  const { t } = useTranslation(['home', 'common'])

  return (
    <Container>
      <Container bg="primary" height={300} justifyContent="center">
        <Text color="white" opacity={0.7} textAlign="center" mb={2} mt={4}>
          {t('total_balance_label')}
        </Text>
        <Text color="white" size="xxl" isBold textAlign="center">
          {t('common:price', { value: '12,698' })}
        </Text>
      </Container>

      <Container bg="white" p={4} top={-50} borderRadius={6}>
        <Text size="xl" isBold my={3}>
          {t('choose_card_label')}
        </Text>

        <CreditCard title="Ballance" value={t('common:price', { value: '8,567' })} size="small" />

        <Text size="xl" isBold mt={4} mb={3}>
          {t('favorites_label')}
        </Text>

        <AvatarGroup>
          <Avatar borderColor="white" imageUrl="https://vuesax.com/avatars/avatar-3.png" />
          <Avatar borderColor="white" imageUrl="https://vuesax.com/avatars/avatar-3.png" />
          <Avatar borderColor="white" imageUrl="https://vuesax.com/avatars/avatar-3.png" />
          <AddFavoriteButton />
        </AvatarGroup>
      </Container>

      <Container px={4} pb={3}>
        <Container flexDirection="row" justifyContent="space-between" my={4}>
          <Container flexDirection="column">
            <Text mb={2}>{t('selected_label')}</Text>
            <Text size="xl" isBold>
              Bella Campbell
            </Text>
          </Container>
          <Avatar imageUrl="https://vuesax.com/avatars/avatar-3.png" size={75} />
        </Container>

        <ButtonGroup>
          <Button
            isSecondary
            text={t('common:price', { value: '589' })}
            onPress={(): void => navigation.push('MyCards')}
          />
          <Button text={t('send_button')} onPress={(): void => navigation.push('SendMoney')} />
        </ButtonGroup>
      </Container>
    </Container>
  )
}
