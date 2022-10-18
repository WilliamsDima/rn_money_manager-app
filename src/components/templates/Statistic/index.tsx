import React from 'react'
import { Image, View, Text } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { styles } from './statistic.styles'

const StatisticTemplate = () => {


  return (
    <View style={styles.container}>
      <Text style={[globalStyles.h1, {color: COLORS.colorLightBlack, marginTop: 20}]}>
        В разработке...
      </Text>
      <Image 
      style={{transform: [{scale: 0.8}], position: 'absolute', bottom: -60}}
      source={require('../../../assets/image/dev.gif')} />
    </View>
  )
}

export default StatisticTemplate
