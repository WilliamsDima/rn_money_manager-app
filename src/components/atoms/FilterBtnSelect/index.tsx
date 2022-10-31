import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { styles } from './btn.styles'
import { IFilterBtnSelect } from './btn.types'

const FilterBtnSelect: FC<IFilterBtnSelect> = ({data, overStyle, isValue, setValue}) => {

  const {title, value} = data
  
  return (
    <TouchableOpacity style={[styles.container, overStyle]}
    onPress={() => setValue(value)}>
      <View style={styles.item}>
        <Text style={[globalStyles.p1, {color: COLORS.colorText}]}>{title}</Text>
      </View>
      <View style={styles.item}>
        <View style={[styles.circle, {borderColor: COLORS.colorText}, isValue === value && styles.active]}/>
      </View>
    </TouchableOpacity>
  )
}

export default FilterBtnSelect
