import React, { FC, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { globalStyles } from '../../../services/styles'
import FilterList from '../../atoms/FilterList'
import { styles } from './list.styles'
import { IHistory } from './list.types'

const HistoryFilter: FC<IHistory> = React.memo(({ filter, setFilter }) => {

  return (
    <View style={styles.container}>
      <Text style={globalStyles.p1}>picer</Text>
      <FilterList 
      overStyle={{width: 'auto'}}
      filter={filter} 
      setFilter={setFilter}/>
    </View>
  )
})

export default HistoryFilter
