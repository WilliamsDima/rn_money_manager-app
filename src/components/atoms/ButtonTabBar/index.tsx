import React, { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../../../services/colors'
import { IconSvg } from '../../../services/icons'
import { styles } from './button.styles'
import { IButtonTabBar } from './button.types'

const ButtonTabBar: FC<IButtonTabBar> = ({
  isFocused,
  assetNames,
  onPress,
}) => {
  
  return (
    <TouchableOpacity
      style={[styles.button, isFocused && styles.focus]}
      onPress={onPress}
    >
      <IconSvg name={assetNames} color={isFocused 
      ? COLORS.colorPriamry 
      : COLORS.mainColor}/>
    </TouchableOpacity>
  )
}

export default ButtonTabBar
