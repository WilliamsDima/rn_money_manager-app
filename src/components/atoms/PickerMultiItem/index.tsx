import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { styles } from './btn.styles'
import { IPickerItem } from './btn.types'

const PickerMultiItem: FC<IPickerItem> = ({overStyle, item, disabled,
  select, setValue}) => {

  const active = select.some((it) => it.value === item.value)
  
  return (
    <TouchableOpacity style={[styles.container, overStyle]}
    disabled={!active && disabled}
    onPress={() => setValue(item)}>
      <Text style={[globalStyles.p1, styles.item, {width: '80%', color: COLORS.colorText}, 
      !active && disabled && {opacity: 0.6}]} numberOfLines={1}>{item.title}</Text>
      <View style={styles.item}>
        <View style={[styles.done, {borderColor: COLORS.colorText}, active && styles.active,
        !active && disabled && {opacity: 0.6}]}>
          <View style={active && styles.check}/>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PickerMultiItem
