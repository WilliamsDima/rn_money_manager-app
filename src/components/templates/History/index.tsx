import React, { useState } from 'react'
import { View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import HistoryFilter from '../../molecules/HistoryFilter'
import HistoryStatisticList from '../../molecules/HistoryStatisticList'
import HistoryList from '../../organisms/HistoryList'
import { styles } from './history.styles'

const HistoryTemplate = () => {

  const [filter, setFilter] = useState(true)
  return (
    <>
      <View style={globalStyles.spaceHorizontal}>

        <HistoryFilter setFilter={setFilter} filter={filter}/>
        <HistoryStatisticList />
        <HistoryList filter={filter}/>
      </View>
    </>
  )
}

export default HistoryTemplate
