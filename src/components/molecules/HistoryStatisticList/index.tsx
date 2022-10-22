import React, { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { countSumTransaction, getItemFromList, numberConverter } from '../../../hooks/helpers'
import { useAppSelector } from '../../../hooks/hooks'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { styles } from './list.styles'
import { IHistory } from './list.types'

const HistoryStatisticList: FC<IHistory> = React.memo(({ data, filterType }) => {

  const { categories, currencyValue } = useAppSelector(state => state.main)

  // собираю самый часто повторяющийся id категории
  const topCategory = {}
  let count = 0
  let maxCount = data[0]?.categori

  for (let i = 0; i < data.length; i++) {
    const categoriId = data[i].categori

    if (topCategory[categoriId]) {
      topCategory[categoriId]++
    } else {
      topCategory[categoriId] = 1
    }

    if (topCategory[categoriId] > maxCount) {
      count = topCategory[categoriId]
      maxCount = categoriId
    }
    
  }

  const topItemCategory = maxCount && getItemFromList(maxCount, categories)
  const filterTransaction = data?.filter((item) => !item.transaction)
  const sum = filterTransaction?.length ? countSumTransaction(filterTransaction) : 0

  let colorSum = {}
  colorSum = sum > 0 ? {color: COLORS.mainColor} : {color: COLORS.colorRed}

  return (
    <View style={styles.container}>
      <Text style={globalStyles.p1}>ТОП: {topItemCategory?.name}</Text>
      <Text style={globalStyles.p1}>ИТОГО:
        <Text 
        style={colorSum}> {sum < 0 ? numberConverter(sum * -1) 
        : numberConverter(sum)} {currencyValue}
        </Text> 
      </Text>
    </View>
  )
})

export default HistoryStatisticList
