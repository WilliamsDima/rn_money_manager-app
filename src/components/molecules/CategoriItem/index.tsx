import React, { FC } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { COLORS } from '../../../services/colors'
import { IconSvg } from '../../../services/icons'
import { HEART } from '../../../services/iconsName'
import { globalStyles } from '../../../services/styles'
import Avatar from '../../atoms/Avatar'
import { styles } from './item.styles'
import { ICategoriItem } from './item.types'

const CategoriItem: FC<ICategoriItem> = React.memo(({item, size, 
  overStyle, categoriId, setCategoriId}) => {

  const WIDTH = Dimensions.get('window').width
  //const size = WIDTH / 4

  const {id, name, icon, bg} = item

  return (
    <TouchableOpacity 
    style={[styles.container, id === categoriId ? {backgroundColor: bg} : {},
      {width: size, height: size }, overStyle]}
    onPress={() => setCategoriId(id)}>
        <Avatar bg={bg} overStyle={styles.icon}>
          <IconSvg name={icon} color={COLORS.colorPriamry}/>
        </Avatar>
        <Text
        style={[globalStyles.p1, id === categoriId ? 
          {color: COLORS.colorPriamry} : {color: bg}]} 
        numberOfLines={1}>{name}</Text>
    </TouchableOpacity>
  )
})

export default CategoriItem
