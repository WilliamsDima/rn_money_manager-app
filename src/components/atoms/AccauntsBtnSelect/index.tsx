import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { IconSvg } from '../../../services/icons'
import { HEART } from '../../../services/iconsName'
import { globalStyles } from '../../../services/styles'
import Avatar from '../Avatar'
import { styles } from './btn.styles'
import { IAccauntsBtnSelect } from './btn.types'

const AccauntsBtnSelect: FC<IAccauntsBtnSelect> = ({data, overStyle, 
  idSelect, setAccauntsHandler}) => {

  const {bg, count, id, icon, name} = data
  
  return (
    <TouchableOpacity style={[styles.container, overStyle]}
    onPress={() => setAccauntsHandler(id)}>
      <View style={styles.item}>
        <Avatar overStyle={styles.icon} bg={bg}>
          <IconSvg name={icon} color={'#fff'}/>
        </Avatar>
        <Text style={[globalStyles.p1]}>{name()}</Text>
      </View>
      <View style={styles.item}>
        <Text style={[globalStyles.p1, styles.item]}>{count} p</Text>
        <View style={[styles.circle, idSelect === id && styles.active]}/>
      </View>
    </TouchableOpacity>
  )
}

export default AccauntsBtnSelect
