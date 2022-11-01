import React from 'react'
import { Image, View, Text } from 'react-native'
import { getThemeApp } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { styles } from './regular.styles'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../../hooks/hooks'

const RegularPaymentsTemplate = () => {

  const { t } = useTranslation()

  const { themeApp } = useAppSelector(state => state.main)

  const COLORS = getThemeApp(themeApp)

  return (
    <View style={[styles.container, { backgroundColor: COLORS.colorPriamry }]}>
      <Text style={[globalStyles.h1, {color: COLORS.colorLightBlack, marginTop: 20}]}>
        {t('In_developing')}...
      </Text>
      <Image 
      style={{transform: [{scale: 0.8}], position: 'absolute', bottom: -60}}
      source={require('../../../assets/image/dev.gif')} />
    </View>
  )
}

export default RegularPaymentsTemplate
