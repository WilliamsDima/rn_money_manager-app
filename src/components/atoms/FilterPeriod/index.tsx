import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { sortData } from '../../../hooks/helpers'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { setSortValue } from '../../../store/redusers/main/main'
import { styles } from './filter.styles'
import { IFilterPeriod } from './filter.types'

const FilterPeriod: FC<IFilterPeriod> = ({}) => {

  const dispatch = useAppDispatch()
  const { sort, themeApp } = useAppSelector(state => state.main)

  const { colorText } = getThemeApp(themeApp)

  const changeSortHandler = (value) => {
    dispatch(setSortValue(value))
  }

  const activeStyle = {
    ...styles.active,
    borderColor: colorText
  }
  
  return (
    <View style={[styles.container]}>
      {sortData().map((item, i) => <TouchableOpacity 
      key={i}
      style={[styles.item, sort === item.value && activeStyle]}
      onPress={() => changeSortHandler(item.value)}>
        <Text style={[globalStyles.p1, {color: colorText}]}>
          {item.title}
        </Text>
      </TouchableOpacity>)}
    </View>
  )
}

export default FilterPeriod
