import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import { styles } from './filter.styles'
import { IFilterPeriod } from './filter.types'

const FilterPeriod: FC<IFilterPeriod> = ({}) => {

  // перемещение линии вычислять математически через useRef
  
  return (
    <View style={[styles.container]}>
      <TouchableOpacity style={styles.item}>
        <Text style={[globalStyles.p1]}>День</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={[globalStyles.p1]}>Неделя</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={[globalStyles.p1]}>Месяц</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={[globalStyles.p1]}>Год</Text>
      </TouchableOpacity>
      <View style={styles.line}/>
    </View>
  )
}

export default FilterPeriod
