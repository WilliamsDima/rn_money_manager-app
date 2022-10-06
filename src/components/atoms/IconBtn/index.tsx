import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { COLORS } from '../../../services/colors'
import { IconSvg } from '../../../services/icons'
import { styles } from './button.styles'
import { IButton } from './button.types'

const IconBtn: FC<IButton> = ({onPress, name}) => {
  
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={onPress}
    >
     <IconSvg style={{transform: [{scale: 1.3}]}} name={name} color={COLORS.colorPriamry}/>
    </TouchableOpacity>
  )
}

export default IconBtn
