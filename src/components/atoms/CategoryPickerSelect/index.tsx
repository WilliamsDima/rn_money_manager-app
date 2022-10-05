import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import { styles } from './btn.styles'
import { ICategorySelect } from './btn.types'

const CategoryPickerSelect: FC<ICategorySelect> = ({data, overStyle, 
  idSelect, setIdSelect}) => {
  
  return (
    <TouchableOpacity style={[styles.container, overStyle]}
    onPress={() => setIdSelect(data.id)}>
      <View style={styles.item}>
        <Text style={[globalStyles.p1]}>{data.name}</Text>
      </View>
      <View style={styles.item}>
        <View style={[styles.circle, idSelect === data.id && styles.active]}/>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryPickerSelect
