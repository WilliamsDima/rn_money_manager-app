import React from 'react'
import { View, Text } from 'react-native'
import AddBtn from '../../atoms/AddBtn'
import CountSumMoney from '../../atoms/CountSumMoney'
import Diogramma from '../../atoms/Diogramma'
import FilterPeriod from '../../atoms/FilterPeriod'
import { styles } from './filter.styles'

const FilterContent = () => {

  return (
    <View style={styles.container}>
        <FilterPeriod />
        <Diogramma />
        <CountSumMoney />

        <View style={styles.addBtn}>
          <AddBtn />
        </View>
    </View>
  )
}

export default FilterContent
