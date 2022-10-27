import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { sortData } from '../../../hooks/helpers'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { globalStyles } from '../../../services/styles'
import { setSortValue } from '../../../store/redusers/main/main'
import { styles } from './filter.styles'
import { IFilterPeriod } from './filter.types'

const FilterPeriod: FC<IFilterPeriod> = ({}) => {

  const dispatch = useAppDispatch()
  const { sort } = useAppSelector(state => state.main)

  const changeSortHandler = (value) => {
    dispatch(setSortValue(value))
  }
  
  return (
    <View style={[styles.container]}>
      {sortData().map((item, i) => <TouchableOpacity 
      key={i}
      style={[styles.item, sort === item.value && styles.active]}
      onPress={() => changeSortHandler(item.value)}>
        <Text style={[globalStyles.p1]}>
          {item.title}
        </Text>
      </TouchableOpacity>)}
      {/* <View style={styles.line}/> */}
    </View>
  )
}

export default FilterPeriod
