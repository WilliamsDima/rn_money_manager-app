import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { globalStyles } from '../../../services/styles'
import { setTabExpOrIncome } from '../../../store/redusers/main/main'
import { styles } from './button.styles'
import { IButtonTabMain } from './button.types'
import { useTranslation } from 'react-i18next'
import { COLORS } from '../../../services/colors'

const ButtonsTabMain: FC<IButtonTabMain> = ({setTab, tabValue, main = true}) => {

  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const { tabExpOrIncome } = useAppSelector(state => state.main)
  
  const tabHandler = (value) => {
    !setTab && dispatch(setTabExpOrIncome(value))
    setTab && setTab(value)
  }
  
  return (
    <View style={styles.tabs}>
      <TouchableOpacity style={styles.item} onPress={() => tabHandler(false)}>
        <Text style={[globalStyles.p2, styles.text, tabExpOrIncome 
          && {opacity: 0.6}, !main && {color: COLORS.colorText}]}>
          {t('expense')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => tabHandler(true)}>
        <Text style={[globalStyles.p2, styles.text, !tabExpOrIncome 
          && {opacity: 0.6}, !main && {color: COLORS.colorText}]}>
          {t('income')}
        </Text>
      </TouchableOpacity>
      <View style={[styles.line, !main && {backgroundColor: COLORS.colorText}, 
      tabValue !== undefined ? tabValue ? {right: 0} : {left: 0}
        : tabExpOrIncome ? {right: 0} : {left: 0} ]}/>
    </View>
  )
}

export default ButtonsTabMain
