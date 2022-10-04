import React, { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { countSumTransaction, numberConverter } from '../../../hooks/helpers'
import { useAppSelector } from '../../../hooks/hooks'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { styles } from './list.styles'
import { IHistory } from './list.types'

const HistoryStatisticList: FC<IHistory> = React.memo(({ data, filterType }) => {

  // ТОП ПО КАТЕГОРИИ БУДЕТ СЧИТЫВАТЬСЯ ИЗ КОЛИЧЕСТВА ID ИСПОЛЬЗУЕМОЙ КАТЕГОРИИ 
  // А НЕ ИЗ КОЛИЧЕСТВА ДЕНЕНГ

  const sum = countSumTransaction(data)

  let colorSum = {}
  colorSum = sum > 0 ? {color: COLORS.mainColor} : {color: COLORS.colorRed}

  return (
    <View style={styles.container}>
      <Text style={globalStyles.p1}>ТОП: название категории</Text>
      <Text style={globalStyles.p1}>ИТОГО:
        <Text 
        style={colorSum}> {sum < 0 ? numberConverter(sum * -1) 
        : numberConverter(sum)} P
        </Text> 
      </Text>
    </View>
  )
})

export default HistoryStatisticList
