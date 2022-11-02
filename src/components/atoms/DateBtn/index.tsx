import React, { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { replaseNumber } from '../../../hooks/helpers'
import { useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { styles } from './button.styles'
import { IButton } from './button.types'

const DateBtn: FC<IButton> = ({onPress, overStyle, prevDate, date}) => {

  const { themeApp } = useAppSelector(state => state.main)

  const COLORS = getThemeApp(themeApp)
  
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[styles.dataBtn, { borderColor: COLORS.colorLightBlack }, prevDate.getDate() === date.getDate()
      && {backgroundColor: COLORS.mainColor}, overStyle]}>

      <Text style={[globalStyles.p1, prevDate.getDate() !== date.getDate() && {color: COLORS.colorText}]}>
        {replaseNumber(prevDate.getDate())} / {replaseNumber(prevDate.getMonth())}
      </Text>
  </TouchableOpacity>
  )
}

export default DateBtn
