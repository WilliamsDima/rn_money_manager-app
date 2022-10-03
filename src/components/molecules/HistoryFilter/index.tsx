import React, { FC, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { globalStyles } from '../../../services/styles'
import FilterList from '../../atoms/FilterList'
import { styles } from './list.styles'
import { IHistory } from './list.types'

const HistoryFilter: FC<IHistory> = React.memo(({ filter, setFilter }) => {

  // ЛЕВЫЙ ПИКЕР - ПО КАТЕГОРИИ

  // ПРАВЫЙ ПИКЕ ИЗ пяти ПУНКТОВ
  // - ВСЕ
  // - ДОХОДЫ
  // - ТРАТЫ
  // - ПО УБЫВАНИЮ
  // - ПО ВОЗРАСТАНИЮ

  // ПРИ ВЫБОРЕ ДАТЫ БУДЕТ ОТКРЫВАТЬСЯ ДАТА ПИКЕР
  // СОРТИРОВКА ПО ДАТЕ БУДЕТ КАК НА ГЛАВНОМ ЭКРАНЕ

  return (
    <View style={styles.container}>
      <Text style={globalStyles.p1}>тут сортировка по дате с главного экрана</Text>
      <View style={styles.item}>
          <Text style={globalStyles.p1}>ПИКЕР</Text>
          <Text style={globalStyles.p1}>ПИКЕР</Text>
      </View>
    </View>
  )
})

export default HistoryFilter
