import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { IconSvg } from '../../../services/icons'
import { styles } from './button.styles'
import { IButton } from './button.types'

const AddBtn: FC<IButton> = ({onPress}) => {
  
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={onPress}
    >
     <IconSvg name={'plus_circle'} />
    </TouchableOpacity>
  )
}

export default AddBtn