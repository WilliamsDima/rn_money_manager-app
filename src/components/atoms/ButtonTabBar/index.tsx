import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
import { IconSvg } from '../../../services/icons'
import { styles } from './button.styles'
import { IButtonTabBar } from './button.types'

const ButtonTabBar: FC<IButtonTabBar> = ({
  isFocused,
  assetNames,
  onPress,
}) => {

  const { themeApp } = useAppSelector(state => state.main)

  const { mainColor, colorPriamry } = getThemeApp(themeApp)
  
  return (
    <TouchableOpacity
      style={[styles.button, isFocused && {backgroundColor: mainColor}]}
      onPress={onPress}
    >
      <IconSvg name={assetNames} color={isFocused 
      ? colorPriamry 
      : mainColor}/>
    </TouchableOpacity>
  )
}

export default ButtonTabBar
