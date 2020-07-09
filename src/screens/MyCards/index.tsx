import React from 'react'
import { SafeAreaView, View, FlatList } from 'react-native'
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
          <Avatar size={46} imageUrl="https://vuesax.com/avatars/avatar-3.png" />
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
        <Text size="xl" isBold mb={3}>
          {t('popular_categories_label')}
        </Text>

        <FlatList
          data={[
            { id: 1, title: 'bills_label' },
            { id: 2, title: 'food_label' },
          ]}
          horizontal
          ItemSeparatorComponent={(): React.ReactElement => <Container mx={2} />}
          renderItem={({ item }): React.ReactElement => (
            <CategoryCard icon={<View />} title={t(item.title)} onPress={(): void => navigation.push('SendMoney')} />
          )}
        />

        <FlatList
          data={[
            { id: 1, title: 'Dribbble', value: '15.00', image: 'https://vuesax.com/avatars/avatar-3.png' },
            { id: 2, title: 'Invision', value: '8.03', image: 'https://vuesax.com/avatars/avatar-3.png' },
          ]}
          ListHeaderComponent={(): React.ReactElement => (
            <Text size="xl" isBold my={4}>
              {t('latest_transactions_label')}
            </Text>
          )}
          ItemSeparatorComponent={(): React.ReactElement => <Container mb={3} />}
          renderItem={({ item }): React.ReactElement => (
            <ListItem
              title={item.title}
              date={t('common:full_datetime')}
              value={t('common:price', { value: item.value })}
              onPress={(): void => navigation.push('SendMoney')}
              rightContent={<Avatar size={55} mr={3} imageUrl={item.image} />}
            />
          )}
        />
      </Container>
    </Container>
  )
}
