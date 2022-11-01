import React, { FC } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { numberConverter } from '../../../hooks/helpers'
import { globalStyles } from '../../../services/styles'
import { styles } from './list.styles'
import { IAccauntItem } from './list.types'
import Avatar from '../Avatar'
import { IconSvg } from '../../../services/icons'
import { getThemeApp } from '../../../services/colors'
import { useAppSelector } from '../../../hooks/hooks'

const AccauntItem: FC<IAccauntItem> = ({ data, onPress }) => {

  const { themeApp } = useAppSelector(state => state.main)

  const {colorPriamry, colorText, colorBlack} = getThemeApp(themeApp)

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.item, {backgroundColor: colorBlack}]} onPress={ () => onPress(data)}>
        <View style={[styles.avatar, {width: '50%'}]}>
          <Avatar overStyle={styles.icon} bg={data.bg}>
            <IconSvg name={data.icon} color={colorPriamry} width={25}/>
          </Avatar>
          <Text style={[globalStyles.p1, {color: colorText}]} numberOfLines={1}>
            {data.name}
          </Text>
        </View>
        <Text style={[globalStyles.p1, {marginBottom: 5, color: colorText}]}>
          {numberConverter(data.count)} {data.currency || 'RUB'}
        </Text> 
      </TouchableOpacity>
    </View>
  )
}

export default AccauntItem
