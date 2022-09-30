import React, { FC } from 'react'
import { styles } from './header.styles'
import { IHeader } from './header.types'
import { useRoute } from '@react-navigation/native'
import { View } from 'react-native'
import HeaderMain from '../../molecules/Headers/HeaderMain'

const Header: FC<IHeader> = () => {
  const route = useRoute()
  
  const renderHeader = () => {
        return <HeaderMain />
  }

  return (
    <View style={[styles.view]}>
      {renderHeader()}
    </View>
  )
}

export default Header
