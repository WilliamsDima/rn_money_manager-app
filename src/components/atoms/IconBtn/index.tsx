import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
import { IconSvg } from '../../../services/icons'
import { styles } from './button.styles'
import { IButton } from './button.types'

const IconBtn: FC<IButton> = ({onPress, name}) => {

  const { themeApp } = useAppSelector(state => state.main)

  const COLORS = getThemeApp(themeApp)
  
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: COLORS.mainColor }]}
      onPress={onPress}
    >
     <IconSvg style={{transform: [{scale: 1.3}]}} name={name} color={COLORS.colorPriamry}/>
    </TouchableOpacity>
  )
}

export default IconBtn
