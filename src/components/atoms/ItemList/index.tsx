import React, { FC } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { countInterest, numberConverter } from '../../../hooks/helpers'
import { useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
import { IconSvg } from '../../../services/icons'
import { globalStyles } from '../../../services/styles'
import Avatar from '../Avatar'
import { styles } from './item.styles'
import { IItem } from './item.types'
import { useNavigation } from '@react-navigation/native'
import { RoutesNames } from '../../../navigation/routes-names'

const ItemList: FC<IItem> = ({item}) => {

  const navigation = useNavigation()
  

  const { sumMoneySort, currencyValue, themeApp } = useAppSelector(state => state.main)

  const COLORS = getThemeApp(themeApp)

  const toHistory = () => {
    navigation.navigate(RoutesNames.History.Home, item)
  }
  
  return (
    <TouchableOpacity style={[styles.item, {backgroundColor: COLORS.colorSecondary}]} onPress={toHistory}>

      <View style={[styles.avatar, {width: '40%'}]}>
        <Avatar overStyle={styles.icon} bg={item.bg}>
          <IconSvg name={item.icon} color={COLORS.colorPriamry} width={25}/>
        </Avatar>
        <Text style={[globalStyles.p1, {color: COLORS.colorText}]} numberOfLines={1}>{item.name}</Text>
      </View>

      <View style={{width: '30%', alignItems: 'flex-end'}}>
        <Text style={[globalStyles.p1, {color: COLORS.colorText}]}>
          {countInterest(+sumMoneySort, +item.count)} %
        </Text> 
      </View>

      <View style={{width: '30%', alignItems: 'flex-end'}}>
        <Text style={[globalStyles.p1, {color: COLORS.colorText}]}>
          {numberConverter(item.count)} {currencyValue}
        </Text> 
      </View>
    </TouchableOpacity>
  )
}

export default ItemList
