import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { numberConverter } from '../../../hooks/helpers'
import { useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
import { IconSvg } from '../../../services/icons'
import { globalStyles } from '../../../services/styles'
import Avatar from '../Avatar'
import { styles } from './btn.styles'
import { IAccauntsBtnSelect } from './btn.types'

const AccauntsBtnSelect: FC<IAccauntsBtnSelect> = ({data, overStyle, 
  idSelect, setAccauntsHandler}) => {

  const {bg, count, id, icon, name, currency} = data

  const { themeApp } = useAppSelector(state => state.main)

  const {mainColor, colorText, colorLightBlack} = getThemeApp(themeApp)
  
  return (
    <TouchableOpacity style={[styles.container, overStyle]}
    onPress={() => setAccauntsHandler(id)}>
      <View style={styles.item}>
        <Avatar overStyle={styles.icon} bg={bg}>
          <IconSvg name={icon} color={'#fff'} width={25}/>
        </Avatar>
        <Text style={[globalStyles.p1, {color: colorText}]}>{name}</Text>
      </View>
      <View style={styles.item}>
        <Text style={[globalStyles.p1, styles.item, {color: colorText}]}>
          {numberConverter(count)} {currency || 'RUB'}
          </Text>
        <View style={[styles.circle, {borderColor: colorLightBlack},
           idSelect === id && { borderColor: mainColor,
            backgroundColor: mainColor,}]}/>
      </View>
    </TouchableOpacity>
  )
}

export default AccauntsBtnSelect
