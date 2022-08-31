import React, { FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { IconSvg } from '../../../services/icons'
import { ARROW_SELECT, HEADER_LEFT } from '../../../services/iconsName'
import { globalStyles } from '../../../services/styles'
import { styles } from './header.styles'

interface IHeader extends TouchableOpacity {
  onPress: () => void
}

const HeaderAccaunt: FC<IHeader> = ({onPress}) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.content}>
            <IconSvg name={HEADER_LEFT} />
            <Text style={globalStyles.p1}>Карта</Text>
        </View>
        <Text style={[globalStyles.p2, {marginRight: 10}]}>10 000 p</Text>
        <IconSvg name={ARROW_SELECT} marginTop={-5}/>
        
    </TouchableOpacity>
  )
}

export default HeaderAccaunt
