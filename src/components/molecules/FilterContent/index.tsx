import React, { FC } from 'react'
import { View, Text } from 'react-native'
import AddBtn from '../../atoms/AddBtn'
import CountSumMoney from '../../atoms/CountSumMoney'
import Diogramma from '../../atoms/Diogramma'
import FilterPeriod from '../../atoms/FilterPeriod'
import { styles } from './filter.styles'

const FilterContent: FC = React.memo(({setExpAndEncomeModal}) => {

  const openModal = () => {
    setExpAndEncomeModal(true)
  }

  return (
    <View style={styles.container}>
        <FilterPeriod />
        <Diogramma />
        <CountSumMoney />

        <View style={styles.addBtn}>
          <AddBtn onPress={openModal}/>
        </View>
    </View>
  )
})

export default FilterContent
