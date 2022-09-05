import React, { FC } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { IconSvg } from '../../../services/icons'
import { HEART } from '../../../services/iconsName'
import { globalStyles } from '../../../services/styles'
import Avatar from '../../atoms/Avatar'
import { styles } from './item.styles'

const CategoriItem: FC = React.memo(({item, size}) => {

  const WIDTH = Dimensions.get('window').width
  //const size = WIDTH / 4

  const {id, name, icon, count, bg} = item

  return (
    <TouchableOpacity style={[styles.container, {width: size, height: size }]}>
        <Avatar bg={bg} overStyle={styles.icon}>
          <IconSvg name={HEART} />
        </Avatar>
        <Text
        style={[globalStyles.p1, {color: bg}]} 
        numberOfLines={1}>{name()}</Text>
    </TouchableOpacity>
  )
})

export default CategoriItem
