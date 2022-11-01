import React, { FC } from 'react'
import { TextInput } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
import { styles } from './Input.styles'
import { IInput } from './Input.types'

const Input: FC<IInput> = (props) => {

  const { themeApp } = useAppSelector(state => state.main)

  const COLORS = getThemeApp(themeApp)

  return <TextInput 
  placeholderTextColor={COLORS.colorText}
  style={[styles.input, { borderBottomColor: COLORS.mainColor, color: COLORS.colorText}, 
  props?.overStyle]}
  {...props}/>
}

export default Input
