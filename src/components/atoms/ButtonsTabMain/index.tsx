import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { globalStyles } from '../../../services/styles'
import { setTabExpOrIncome } from '../../../store/redusers/main/main'
import { styles } from './button.styles'
import { IButtonTabMain } from './button.types'
import { useTranslation } from 'react-i18next'
import { getThemeApp } from '../../../services/colors'
import changeNavigationBarColor from 'react-native-navigation-bar-color'

const ButtonsTabMain: FC<IButtonTabMain> = ({setTab, tabValue, main = true}) => {

  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const { tabExpOrIncome, themeApp } = useAppSelector(state => state.main)

  const { colorText, colorPriamry, colorBlack } = getThemeApp(themeApp)

  
  const example = async () => {
    try{
        const response = await changeNavigationBarColor(colorBlack)
        console.log(response)// {success: true}
    }catch(e){
        console.log(e)// {success: false}
    }

  }

  example()
  
  const tabHandler = (value) => {
    !setTab && dispatch(setTabExpOrIncome(value))
    setTab && setTab(value)
  }

  const active = tabValue !== undefined ? tabValue : tabExpOrIncome

  const colorTextTheme = main ?  themeApp === 'dark' ? {color: colorText} : {color: colorPriamry}
  : themeApp === 'dark' ? {color: colorPriamry} : {color: colorText}
  
  return (
    <View style={styles.tabs}>
      <TouchableOpacity style={styles.item} onPress={() => tabHandler(false)}>
        <Text style={[globalStyles.p2, colorTextTheme, styles.text, active
          && {opacity: 0.6}]}>
          {t('expense')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => tabHandler(true)}>
        <Text style={[globalStyles.p2, colorTextTheme, styles.text, !active
          && {opacity: 0.6}]}>
          {t('income')}
        </Text>
      </TouchableOpacity>
      <View style={[styles.line, {backgroundColor: colorPriamry}, 
      !main && {backgroundColor: colorText}, 
      tabValue !== undefined ? tabValue ? {right: 0} : {left: 0}
        : tabExpOrIncome ? {right: 0} : {left: 0} ]}/>
    </View>
  )
}

export default ButtonsTabMain
