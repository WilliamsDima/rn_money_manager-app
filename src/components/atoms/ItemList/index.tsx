import React, { FC } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { countInterest, numberConverter } from '../../../hooks/helpers'
import { useAppSelector } from '../../../hooks/hooks'
import { COLORS } from '../../../services/colors'
import { IconSvg } from '../../../services/icons'
import { globalStyles } from '../../../services/styles'
import Avatar from '../Avatar'
import { styles } from './item.styles'
import { IItem } from './item.types'

const ItemList: FC<IItem> = ({item}) => {

  const { sumMoneySort } = useAppSelector(state => state.main)
  
  return (
    <TouchableOpacity style={[styles.item]}>

      <View style={[styles.avatar, {width: '40%'}]}>
        <Avatar overStyle={styles.icon} bg={item.bg}>
          <IconSvg name={item.icon} color={COLORS.colorPriamry}/>
        </Avatar>
        <Text style={[globalStyles.p1]} numberOfLines={1}>{item.name}</Text>
      </View>

      <View style={{width: '30%', alignItems: 'flex-end'}}>
        <Text style={[globalStyles.p1]}>
          {countInterest(+sumMoneySort, +item.count)} %
        </Text> 
      </View>

      <View style={{width: '30%', alignItems: 'flex-end'}}>
        <Text style={[globalStyles.p1]}>
          {numberConverter(item.count)} P
        </Text> 
      </View>
    </TouchableOpacity>
  )
}

export default ItemList
