import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { styles } from './btn.styles'
import { IPickerItem } from './btn.types'

const PickerMultiItem: FC<IPickerItem> = ({overStyle, item, disabled,
  select, setValue}) => {

  const { themeApp } = useAppSelector(state => state.main)

  const COLORS = getThemeApp(themeApp)

  const active = select.some((it) => it.value === item.value)

  const checkStyles = {
    ...styles.check,
    borderColor: COLORS.mainColor,
  } 
  
  return (
    <TouchableOpacity style={[styles.container, overStyle]}
    disabled={!active && disabled}
    onPress={() => setValue(item)}>
      <Text style={[globalStyles.p1, styles.item, {width: '80%', color: COLORS.colorText}, 
      !active && disabled && {opacity: 0.6}]} numberOfLines={1}>{item.title}</Text>
      <View style={styles.item}>
        <View style={[styles.done, {borderColor: COLORS.colorText}, active && { borderColor: COLORS.mainColor },
        !active && disabled && {opacity: 0.6}]}>
          <View style={active && checkStyles}/>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PickerMultiItem
