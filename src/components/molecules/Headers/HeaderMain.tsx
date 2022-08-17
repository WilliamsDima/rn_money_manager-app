import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text } from 'react-native'
import { styles } from './header.styles'
import HeaderAccaunt from '../HeaderAccaunt'
import HistoryBtn from '../../atoms/HistoryBtn'

interface IHeaderMain {
  
}

const HeaderMain: FC<IHeaderMain> = ({routeName}) => {

  const navigation = useNavigation()

  return (
    <View style={styles.header}>
      <HeaderAccaunt />
      <HistoryBtn />
    </View>
  )
}

export default HeaderMain
