import React from 'react'
import { Image, View, Text } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { styles } from './settings.styles'

const SettingsTemplate = () => {


  return (
    <View style={styles.container}>
      <Text style={[globalStyles.h1]}>
      SettingsTemplate
      </Text>
    </View>
  )
}

export default SettingsTemplate
