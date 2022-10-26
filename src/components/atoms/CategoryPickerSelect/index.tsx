import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import { styles } from './btn.styles'
import { ICategorySelect } from './btn.types'
import Avatar from '../Avatar'
import { IconSvg } from '../../../services/icons'
import { COLORS } from '../../../services/colors'

const CategoryPickerSelect: FC<ICategorySelect> = ({data, overStyle, 
  idSelect, setIdSelect}) => {

  const active = idSelect.some((id) => id === data.id)
  
  return (
    <TouchableOpacity style={[styles.container, overStyle]}
    onPress={() => setIdSelect(data.id)}>
      <View style={styles.item}>
        <Avatar overStyle={styles.icon} bg={data.bg}>
          <IconSvg name={data.icon} color={COLORS.colorPriamry} width={25}/>
        </Avatar>
        <Text style={[globalStyles.p1]}>{data.name}</Text>
      </View>
      <View style={styles.item}>
        <View style={[styles.done, active && styles.active]}>
          <View style={active && styles.check}/>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryPickerSelect
