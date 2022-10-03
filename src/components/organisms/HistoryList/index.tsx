import React, { FC, useState } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import { dataFilterMaxValue, periodSort } from '../../../hooks/helpers'
import { useAppSelector } from '../../../hooks/hooks'
import { globalStyles } from '../../../services/styles'
import HistoryItem from '../../atoms/HistoryItem'
import { styles } from './list.styles'
import { IHistory } from './list.types'

const HistoryList: FC<IHistory> = ({ filter }) => {

  const renderItem = ({ item }) => {
      return <HistoryItem data={item} />
  };

  const { transaction, tabExpOrIncome, sort, sortDatePeriod } = useAppSelector(state => state.main)

  const dataFilterExpOrIncom = transaction.filter((c) => c.income === tabExpOrIncome)
  const sortDataPeriodSelect = periodSort(sort, transaction, sortDatePeriod)
  const filterMaxValue = dataFilterMaxValue(transaction, filter)

  const res = [...transaction].reverse()

  return (
    <View style={styles.container}>
      <FlatList style={{flex: 1, paddingHorizontal: 10}}
        data={res}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}/>
    </View>
  )
}

export default HistoryList
