import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import { styles } from './more.styles'
import { useNavigation } from '@react-navigation/native'
import { RoutesNames } from '../../../navigation/routes-names'
import { IconSvg } from '../../../services/icons'
import { COIN, GOOGLE_PLAY, STAR } from '../../../services/iconsName'

const MoreTemplate = () => {

  const navigation = useNavigation()

  const toAboutApp = () => {
    navigation.navigate(RoutesNames.More.AboutApp)
  }

  const toStatistic = () => {
    navigation.navigate(RoutesNames.More.Statistic)
  }

  const toRegularPayments = () => {
    navigation.navigate(RoutesNames.More.RegularPayments)
  }

  const toSettings = () => {
    navigation.navigate(RoutesNames.More.Settings)
  }

  const toAuth = () => {
    navigation.navigate(RoutesNames.Auth.Home)
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={toAuth}>
        <Text style={globalStyles.h2}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={toStatistic}>
        <Text style={globalStyles.h2}>Статистика</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={toRegularPayments}>
        <Text style={globalStyles.h2}>Регулярные платежи</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={globalStyles.h2}>Поделиться</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={toSettings}>
        <Text style={globalStyles.h2}>Настройки</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={globalStyles.h2}>Оставить отзыв</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={toAboutApp}>
        <View style={{marginHorizontal: 10}}>
          <IconSvg name={COIN} />
        </View>
        <Text style={globalStyles.h2}>О приложении</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default MoreTemplate
