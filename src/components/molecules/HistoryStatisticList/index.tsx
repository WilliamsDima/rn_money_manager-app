import React, { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { globalStyles } from '../../../services/styles'
import { styles } from './list.styles'
import { IHistory } from './list.types'

const HistoryStatisticList: FC<IHistory> = React.memo(({ }) => {

  // ТОП ПО КАТЕГОРИИ БУДЕТ СЧИТЫВАТЬСЯ ИЗ КОЛИЧЕСТВА ID ИСПОЛЬЗУЕМОЙ КАТЕГОРИИ 
  // А НЕ ИЗ КОЛИЧЕСТВА ДЕНЕНГ

  // ИТОГО ЭТО ИТОГОВАЯ СУММА В ЗАИСИМОСТИ ОТ ВЫБРАННОГО ФИЛЬТРА 

  return (
    <View style={styles.container}>
      <Text style={globalStyles.p1}>ТОП: название категории</Text>
      <Text style={globalStyles.p1}>ИТОГО: 0 P</Text>
    </View>
  )
})

export default HistoryStatisticList
