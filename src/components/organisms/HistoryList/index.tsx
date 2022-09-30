import React, { FC, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { globalStyles } from '../../../services/styles'
import { styles } from './list.styles'
import { IHistory } from './list.types'

const HistoryList: FC<IHistory> = () => {

  const { expensesAndIncomes } = useAppSelector(state => state.main)
  
  return (
    <View style={styles.container}>
      <Text style={globalStyles.p1}>HistoryList</Text>
    </View>
  )
}

export default HistoryList
