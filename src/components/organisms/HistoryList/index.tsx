import React, { FC, useState } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import { dataFilterMaxValue, periodSort } from '../../../hooks/helpers'
import { useAppSelector } from '../../../hooks/hooks'
import { globalStyles } from '../../../services/styles'
import { styles } from './list.styles'
import { IHistory } from './list.types'

const HistoryList: FC<IHistory> = ({ filter }) => {

  const renderItem = ({ item }) => {
      return <View style={{height: 70, backgroundColor: '#333', marginBottom: 20,}}>
        <Text style={{color: '#fff'}}>{item.count}</Text>
      </View>
  };

  const { expensesAndIncomes, tabExpOrIncome, sort, sortDatePeriod } = useAppSelector(state => state.main)

  const dataFilterExpOrIncom = expensesAndIncomes.filter((c) => c.income === tabExpOrIncome)

  const sortDataPeriodSelect = periodSort(sort, dataFilterExpOrIncom, sortDatePeriod)

  const filterMaxValue = dataFilterMaxValue(sortDataPeriodSelect, filter)
  
  return (
    <View style={styles.container}>
      <FlatList style={{flex: 1, paddingHorizontal: 10}}
        data={filterMaxValue}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}/>
    </View>
  )
}

export default HistoryList
