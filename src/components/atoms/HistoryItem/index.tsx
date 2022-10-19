import React, { FC } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { getItemFromList, numberConverter } from '../../../hooks/helpers'
import { useAppSelector } from '../../../hooks/hooks'
import { globalStyles } from '../../../services/styles'
import { styles } from './list.styles'
import { IHistory } from './list.types'
import Avatar from '../../atoms/Avatar'
import { IconSvg } from '../../../services/icons'
import { HEART, REFUND, REFUND_REPO } from '../../../services/iconsName'
import { ICategories } from '../../../store/redusers/main/types'
import { COLORS } from '../../../services/colors'

const HistoryItem: FC<IHistory> = ({ data, setData }) => {

  const { categories, accounts } = useAppSelector(state => state.main)

  const currentCategori: ICategories = getItemFromList(data?.categori, categories)
  let currentAccaunt = ''

  if (data?.transaction) {
    const accOne = getItemFromList(data.accounts[0], accounts)
    const accTwo = getItemFromList(data.accounts[1], accounts)
    currentAccaunt = accOne && accTwo ? accOne?.name + ' -> ' 
    +  accTwo?.name : ''
  } else {
    currentAccaunt = getItemFromList(data?.accounts, accounts)?.name
  }

  const dateConverter = (i) => {
    if (i < 10) {
      return '0' + i
    }
    return i
  }

  const date = new Date(data?.date)
  const dateDisplay = dateConverter(date.getDate()) + '/' + dateConverter(date.getMonth()) 
  + '/'+ date.getFullYear()
  const timeDisplay = dateConverter(date.getHours()) + ':' + dateConverter(date.getMinutes()) 
  + ':'+ dateConverter(date.getSeconds())


  return (
    <TouchableOpacity 
    onPress={() => setData(data)}
    style={[styles.item]}>
      <View style={[styles.avatar, {width: '40%'}]}>
        <Avatar overStyle={styles.icon} bg={currentCategori?.bg}>
          <IconSvg name={currentCategori?.icon || REFUND} color={COLORS.colorPriamry} width={25}/>
        </Avatar>
        <Text style={[globalStyles.p1]} numberOfLines={1}>
          {currentCategori?.name || 'перевод'}
        </Text>
      </View>

      <View style={[{width: '30%', alignItems: 'center', opacity: 0.6}]}>
        <Text style={[globalStyles.s2]}>{dateDisplay}</Text>
        <Text style={[globalStyles.s2]}>{timeDisplay}</Text>
      </View>

      <View style={{width: '30%', alignItems: 'flex-end'}}>
        <Text style={[globalStyles.p1, {marginBottom: 5}]}>
          <Text style={{color: data?.income ? COLORS.mainColor : COLORS.colorRed}}>
            {data?.transaction ? '' : data?.income ? ' + ' : ' - ' }
          </Text>
          {numberConverter(data?.count)} P
        </Text> 
        <Text style={[globalStyles.s2, {opacity: 0.6}]}>
          {currentAccaunt || 'счёт удален'}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default HistoryItem
