import React, { FC } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { numberConverter } from '../../../hooks/helpers'
import { globalStyles } from '../../../services/styles'
import { styles } from './list.styles'
import { IAccauntItem } from './list.types'
import Avatar from '../Avatar'
import { IconSvg } from '../../../services/icons'
import { HEART } from '../../../services/iconsName'
import { COLORS } from '../../../services/colors'

const AccauntItem: FC<IAccauntItem> = ({ data }) => {


  return (
    <TouchableOpacity style={[styles.item]}>
      <View style={[styles.avatar, {width: '50%'}]}>
        <Avatar overStyle={styles.icon} bg={data.bg}>
          <IconSvg name={data.icon} color={COLORS.colorPriamry}/>
        </Avatar>
        <Text style={[globalStyles.p1]} numberOfLines={1}>
          {data.name}
        </Text>
      </View>
      <Text style={[globalStyles.p1, {marginBottom: 5}]}>
        {numberConverter(data.count)} P
      </Text> 
    </TouchableOpacity>
  )
}

export default AccauntItem
