import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
import { styles } from './button.styles'
import { IButton } from './button.types'

const Button: FC<IButton> = ({onPress, children, overStyle, disabled}) => {

  const { themeApp } = useAppSelector(state => state.main)

  const { colorYellow, colorSecondary } = getThemeApp(themeApp)
  
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, {backgroundColor: colorYellow}, overStyle, disabled 
      && {backgroundColor: colorSecondary}]}
      onPress={onPress}
    >
     {children}
    </TouchableOpacity>
  )
}

export default Button
