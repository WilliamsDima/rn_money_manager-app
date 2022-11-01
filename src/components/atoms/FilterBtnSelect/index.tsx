import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { styles } from './btn.styles'
import { IFilterBtnSelect } from './btn.types'

const FilterBtnSelect: FC<IFilterBtnSelect> = ({data, overStyle, isValue, setValue}) => {

  const { themeApp } = useAppSelector(state => state.main)

  const { colorText, mainColor } = getThemeApp(themeApp)

  const {title, value} = data
  
  return (
    <TouchableOpacity style={[styles.container, overStyle]}
    onPress={() => setValue(value)}>
      <View style={styles.item}>
        <Text style={[globalStyles.p1, {color: colorText}]}>{title}</Text>
      </View>
      <View style={styles.item}>
        <View style={[styles.circle, {borderColor: colorText}, isValue === value 
        && {borderColor: mainColor, backgroundColor: mainColor}]}/>
      </View>
    </TouchableOpacity>
  )
}

export default FilterBtnSelect
