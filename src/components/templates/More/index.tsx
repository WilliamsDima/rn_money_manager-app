import React from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../services/styles'
import { styles } from './more.styles'
import { useNavigation } from '@react-navigation/native'
import { RoutesNames } from '../../../navigation/routes-names'

const MoreTemplate = () => {

  const navigation = useNavigation()

  const toAboutApp = () => {
    navigation.navigate(RoutesNames.More.AboutApp)
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={globalStyles.h2}>Поделиться</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={globalStyles.h2}>Настройки</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={globalStyles.h2}>Оставить отзыв</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={toAboutApp}>
        <Text style={globalStyles.h2}>О приложении</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default MoreTemplate
