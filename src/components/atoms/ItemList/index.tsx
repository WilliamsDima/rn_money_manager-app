import React, { FC } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { IconSvg } from '../../../services/icons'
import { globalStyles } from '../../../services/styles'
import { styles } from './item.styles'
import { IItem } from './item.types'

const ItemList: FC<IItem> = ({item}) => {
  
  return (
    <TouchableOpacity style={[styles.item]}>
      <View>
        <IconSvg name={'heart'}/>
      </View>
      <Text style={globalStyles.p1}>{item.id}</Text> 
      <Text style={globalStyles.p1}>Здоровье</Text> 
      <Text style={globalStyles.p1}>Здоровье</Text> 
    </TouchableOpacity>
  )
}

export default ItemList
