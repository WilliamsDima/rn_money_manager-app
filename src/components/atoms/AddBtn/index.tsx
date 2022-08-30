import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { IconSvg } from '../../../services/icons'
import { PLUS_CIRCLE } from '../../../services/iconsName'
import { styles } from './button.styles'
import { IButton } from './button.types'

const AddBtn: FC<IButton> = ({onPress}) => {
  
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={onPress}
    >
     <IconSvg name={PLUS_CIRCLE} />
    </TouchableOpacity>
  )
}

export default AddBtn
