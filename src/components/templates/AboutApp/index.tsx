import React from 'react'
import { Text, TouchableOpacity, View, Linking  } from 'react-native'
import { globalStyles } from '../../../services/styles'
import { styles } from './app.styles'
import ScrollContainer from '../../atoms/Container/ScrollContainer'
import { IconSvg } from '../../../services/icons'
import { STAR } from '../../../services/iconsName'
import { COLORS } from '../../../services/colors'

const AboutAppTemplate = () => {

  const toMySite = () => {
    Linking.openURL('https://williams-dy.ru/')
  }
  return (
    <ScrollContainer overStyle={styles.container}>
      <View style={styles.item}>
        <Text style={globalStyles.p1}>
          Версия приложения: 1.0.0
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={globalStyles.p1}>
          Оставить отзыв
        </Text>
        <TouchableOpacity style={styles.review}>
          <IconSvg name={STAR}/>
          <IconSvg name={STAR}/>
          <IconSvg name={STAR}/>
          <IconSvg name={STAR}/>
          <IconSvg name={STAR}/>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <Text style={globalStyles.p1}>
          Контакты разработчика:
        </Text>
      </View>
      <View style={styles.item}>
        <TouchableOpacity onPress={toMySite}>
          <Text style={[globalStyles.p1, {color: COLORS.mainColor}]}>
            Сайт разработчика: <Text style={{textDecorationLine: 'underline'}}>
              williams-dy.ru</Text> 
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollContainer>
  )
}

export default AboutAppTemplate
