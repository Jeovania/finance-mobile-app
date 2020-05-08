import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Container, Avatar, IconButton, Text, CategoryCard, ListItem, CreditCard } from '../../components'
import { Props } from './types'

export default function MyCards({ navigation }: Props): JSX.Element {
  const { t } = useTranslation(['my_cards', 'common'])

  return (
    <Container>
      <Container bg="primary" height={300} px={4} borderBottomRightRadius={6} borderBottomLeftRadius={6}>
        <SafeAreaView />
        <Container flexDirection="row" justifyContent="space-between" alingItems="center" mb={4}>
          <Avatar size={42} imageUrl="https://vuesax.com/avatars/avatar-3.png" />
          <Text size="lg" color="white">
            +
          </Text>
        </Container>
        <Text size="lg" color="white" isBold>
          {t('my_cards_label')}
        </Text>

        <IconButton iconName="+" mt={4} onPress={(): void => navigation.push('SendMoney')} />
      </Container>

      {/* <CreditCard
          size="large"
          flagImageUrl="visa"
          icon={<View />}
          title={t('balance_label')}
          value={t('common:price', { value: '8,567' })}
          cardNumber={t('common:card_number', { cardNumber: '1234' })}
        /> */}

      <Container m={4}>
        <Text size="lg" isBold mb={3}>
          {t('popular_categories_label')}
        </Text>

        <CategoryCard icon={<View />} title={t('bills_label')} onPress={(): void => navigation.push('SendMoney')} />
        <CategoryCard icon={<View />} title={t('food_label')} onPress={(): void => navigation.push('SendMoney')} />

        <Text size="lg" isBold mb={3}>
          {t('latest_transactions_label')}
        </Text>

        <ListItem
          mb={3}
          title="Dribbble"
          date={t('common:full_datetime')}
          value={t('common:price', { value: '15.00' })}
          onPress={(): void => navigation.push('SendMoney')}
          rightContent={<Avatar size={42} mr={3} imageUrl="https://vuesax.com/avatars/avatar-3.png" />}
        />

        <ListItem
          title="Invision"
          date={t('common:full_datetime')}
          value={t('common:price', { value: '8.03' })}
          onPress={(): void => navigation.push('SendMoney')}
          rightContent={<Avatar size={42} mr={3} imageUrl="https://vuesax.com/avatars/avatar-3.png" />}
        />
      </Container>
    </Container>
  )
}
