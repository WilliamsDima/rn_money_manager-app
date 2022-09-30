import React, { FC, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { globalStyles } from '../../../services/styles'
import { styles } from './list.styles'
import { IHistory } from './list.types'

const HistoryFilter: FC<IHistory> = () => {

  return (
    <View style={styles.container}>
      <Text style={globalStyles.p1}>HistoryList</Text>
    </View>
  )
}

export default HistoryFilter
