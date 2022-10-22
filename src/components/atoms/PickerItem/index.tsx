import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { numberConverter } from '../../../hooks/helpers'
import { IconSvg } from '../../../services/icons'
import { globalStyles } from '../../../services/styles'
import Avatar from '../Avatar'
import { styles } from './btn.styles'
import { IPickerItem } from './btn.types'

const PickerItem: FC<IPickerItem> = ({label, value, overStyle,
  select, changeValue}) => {
  
  return (
    <TouchableOpacity style={[styles.container, overStyle]}
    onPress={() => changeValue(value)}>
      <Text style={[globalStyles.p1, styles.item]}>{label}</Text>
      <View style={[styles.circle, select === value && styles.active]}/>
    </TouchableOpacity>
  )
}

export default PickerItem
