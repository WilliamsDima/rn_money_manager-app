import React, { FC } from 'react'
import { styles } from './main.styles'
import { IMain } from './main.types'
import { View } from 'react-native'
import FilterList from '../../atoms/FilterList'
import ListData from '../../molecules/ListData'

const MainContetn: FC<IMain> = () => {

  return (
    <View style={[styles.view]}>
        <FilterList />
        <ListData />

    </View>
  )
}

export default MainContetn
