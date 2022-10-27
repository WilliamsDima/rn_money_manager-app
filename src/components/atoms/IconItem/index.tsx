import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { COLORS } from '../../../services/colors'
import { IconSvg } from '../../../services/icons'
import Avatar from '../../atoms/Avatar'
import { styles } from './item.styles'
import { IIconItem } from './item.types'

const IconItem: FC<IIconItem> = React.memo(({size, iconName, bg,
  overStyle, idSelect, setId}) => {

  return (
    <TouchableOpacity 
    style={[styles.container, iconName === idSelect ? {backgroundColor: bg ? bg 
      : COLORS.colorSecondary} 
      : {},
      {width: size, height: size }, overStyle]}
    onPress={() => setId(iconName)}>
        <Avatar bg={iconName === idSelect ? bg : COLORS.colorSecondary} overStyle={styles.icon}>
          <IconSvg style={{width: 50, height: 50}} 
          name={iconName} 
          color={COLORS.colorPriamry} />
        </Avatar>
    </TouchableOpacity>
  )
})

export default IconItem
