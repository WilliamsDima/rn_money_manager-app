import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import ScrollContainer from '../../atoms/Container/ScrollContainer'
import GreenWrapper from '../../atoms/GreenWrapper'
import HistoryFilter from '../../molecules/HistoryFilter'
import HistoryList from '../../organisms/HistoryList'
import { styles } from './history.styles'

const HistoryTemplate = () => {
  return (
    <>
      <View style={globalStyles.spaceHorizontal}>

        <HistoryFilter />
        <HistoryList />
      </View>
    </>
  )
}

export default HistoryTemplate
