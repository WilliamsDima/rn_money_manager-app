import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import ScrollContainer from '../../atoms/Container/ScrollContainer'
import GreenWrapper from '../../atoms/GreenWrapper'
import HistoryFilter from '../../molecules/HistoryFilter'
import HistoryList from '../../organisms/HistoryList'
import { styles } from './history.styles'

const HistoryTemplate = () => {

  const [filter, setFilter] = useState(true)
  return (
    <>
      <View style={globalStyles.spaceHorizontal}>

        <HistoryFilter setFilter={setFilter} filter={filter}/>
        <HistoryList filter={filter}/>
      </View>
    </>
  )
}

export default HistoryTemplate
