import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { IconSvg } from '../../../services/icons'
import { HEADER_LEFT } from '../../../services/iconsName'
import { globalStyles } from '../../../services/styles'
import { styles } from './header.styles'

const HeaderAccaunt = () => {

  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.content}>
            <IconSvg name={HEADER_LEFT} />
            <Text style={globalStyles.p1}>Карта</Text>
        </View>
        <Text style={[globalStyles.p2, {marginRight: 10}]}>10 000 p</Text>
        <IconSvg name={'arrow_select'} marginTop={-5}/>
        
    </TouchableOpacity>
  )
}

export default HeaderAccaunt
