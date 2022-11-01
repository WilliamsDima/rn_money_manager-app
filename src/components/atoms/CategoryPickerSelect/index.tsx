import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import { styles } from './btn.styles'
import { ICategorySelect } from './btn.types'
import Avatar from '../Avatar'
import { IconSvg } from '../../../services/icons'
import { getThemeApp } from '../../../services/colors'
import { useAppSelector } from '../../../hooks/hooks'

const CategoryPickerSelect: FC<ICategorySelect> = ({data, overStyle, 
  idSelect, setIdSelect}) => {

  const { themeApp } = useAppSelector(state => state.main)

  const { colorText, colorPriamry, mainColor } = getThemeApp(themeApp)

  const active = idSelect.some((id) => id === data.id)
  
  return (
    <TouchableOpacity style={[styles.container, overStyle]}
    onPress={() => setIdSelect(data.id)}>
      <View style={styles.item}>
        <Avatar overStyle={styles.icon} bg={data.bg}>
          <IconSvg name={data.icon} color={colorPriamry} width={25}/>
        </Avatar>
        <Text style={[globalStyles.p1, {color: colorText}]}>{data.name}</Text>
      </View>
      <View style={styles.item}>
        <View style={[styles.done, {borderColor: colorText}, active && {borderColor: mainColor}]}>
          <View style={[active && styles.check, active && { borderColor: mainColor}]}/>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryPickerSelect
