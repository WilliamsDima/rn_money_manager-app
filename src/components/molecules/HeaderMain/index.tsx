import React from 'react'
import { View } from 'react-native'
import ButtonsTabMain from '../../atoms/ButtonsTabMain'
import Rate from '../../atoms/Rate'
import FilterContent from '../FilterContent'
import { styles } from './header.styles'

const HeaderMain = () => {

  return (
    <View style={styles.container}>
        {/* <Rate /> */}
        <ButtonsTabMain />
    </View>
  )
}

export default HeaderMain
