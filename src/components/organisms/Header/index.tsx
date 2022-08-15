import React, { FC } from 'react'
import { styles } from './header.styles'
import { IHeader } from './header.types'
import { useRoute } from '@react-navigation/native'
import { RoutesNames } from '../../../navigation/routes-names'
import { View } from 'react-native'
import HeaderMain from '../../molecules/Headers/HeaderMain'

const Header: FC<IHeader> = () => {
  const route = useRoute()
  
  const renderHeader = () => {
    switch (route.name) {
      case RoutesNames.Main.Home:
      case RoutesNames.Main.HomeStack:
      case RoutesNames.Accaunts.Home:
      case RoutesNames.Accaunts.HomeStack:
      case RoutesNames.Categories.Home:
      case RoutesNames.Categories.HomeStack:
      case RoutesNames.More.Home:
      case RoutesNames.More.HomeStack:
      return (
          <HeaderMain routeName={route.name}/>
        )

      default:
        return <HeaderMain />
    }
  }

  return (
    <View style={[styles.view]}>
      {renderHeader()}
    </View>
  )
}

export default Header
