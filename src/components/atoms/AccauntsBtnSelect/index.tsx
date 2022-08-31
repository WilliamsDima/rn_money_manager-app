import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { IconSvg } from '../../../services/icons'
import { HEART } from '../../../services/iconsName'
import { globalStyles } from '../../../services/styles'
import Avatar from '../Avatar'
import { styles } from './btn.styles'
import { IAccauntsBtnSelect } from './btn.types'

const AccauntsBtnSelect: FC<IAccauntsBtnSelect> = ({overStyle}) => {
  
  return (
    <TouchableOpacity style={[styles.container, overStyle]}>
      <View style={styles.item}>
        <Avatar overStyle={styles.icon} bg='red'>
          <IconSvg name={HEART} />
        </Avatar>
        <Text style={[globalStyles.p1]}>Карта</Text>
      </View>
      <View style={styles.item}>
        <Text style={[globalStyles.p1, styles.item]}>10 000 p</Text>
        <View style={styles.circle}/>
      </View>
    </TouchableOpacity>
  )
}

export default AccauntsBtnSelect
