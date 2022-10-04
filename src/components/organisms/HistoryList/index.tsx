import React, { FC } from 'react'
import { FlatList, View } from 'react-native'
import HistoryItem from '../../atoms/HistoryItem'
import { styles } from './list.styles'
import { IHistory } from './list.types'

const HistoryList: FC<IHistory> = ({ data }) => {

  const renderItem = ({ item }) => {
      return <HistoryItem data={item} />
  };

  return (
    <View style={styles.container}>
      <FlatList style={{flex: 1, paddingHorizontal: 10}}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}/>
    </View>
  )
}

export default HistoryList
