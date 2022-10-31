import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { styles } from './btn.styles'
import { IPickerItem } from './btn.types'

const PickerItem: FC<IPickerItem> = ({label, value, overStyle,
  select, changeValue}) => {
  
  return (
    <TouchableOpacity style={[styles.container, overStyle]}
    onPress={() => changeValue(value)}>
      <Text style={[globalStyles.p1, styles.item, {width: '80%', color: COLORS.colorText}]} numberOfLines={1}>
        {label}
      </Text>
      <View style={[styles.circle, {borderColor: COLORS.colorText}, select === value && styles.active]}/>
    </TouchableOpacity>
  )
}

export default PickerItem
