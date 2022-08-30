import React, { FC } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { IconSvg } from '../../../services/icons'
import { HEART } from '../../../services/iconsName'
import { globalStyles } from '../../../services/styles'
import Avatar from '../Avatar'
import { styles } from './item.styles'
import { IItem } from './item.types'

const ItemList: FC<IItem> = ({item}) => {
  
  return (
    <TouchableOpacity style={[styles.item]}>

      <View style={styles.avatar}>
        <Avatar overStyle={styles.icon} bg='red'>
          <IconSvg name={HEART} />
        </Avatar>
        <Text style={[globalStyles.p1, {width: '50%'}]} numberOfLines={1}>Здоровье</Text>
      </View>

      <Text style={globalStyles.p1}>70 %</Text> 
      <Text style={globalStyles.p1}>10 000 p</Text> 
    </TouchableOpacity>
  )
}

export default ItemList
