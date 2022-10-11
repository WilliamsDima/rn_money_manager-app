import React, { FC, useState } from 'react'
import { FlatList, View } from 'react-native'
import HistoryItem from '../../atoms/HistoryItem'
import { styles } from './list.styles'
import { IHistory } from './list.types'
import CustomModal from '../../atoms/Modal'
import HistoryInfoModal from '../../molecules/HistoryInfoModal'

const HistoryList: FC<IHistory> = ({ data }) => {

  const [historyInfo, setHistoryInfo] = useState(false)

  const renderItem = ({ item }) => {
      return <HistoryItem data={item} setData={setHistoryInfo}/>
  };

  return (
    <View style={styles.container}>
      <CustomModal
        visible={historyInfo ? true : false}
        animationType={'fade'}
        closeHandler={setHistoryInfo}>
          <HistoryInfoModal
          data={historyInfo}
          close={() => setHistoryInfo(false)}/>
      </CustomModal>

      <FlatList style={{flex: 1, paddingHorizontal: 10}}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}/>
    </View>
  )
}

export default HistoryList
