import React, { FC, useState } from 'react'
import { FlatList, View } from 'react-native'
import HistoryItem from '../../atoms/HistoryItem'
import { styles } from './list.styles'
import { IHistory } from './list.types'
import CustomModal from '../../atoms/Modal'
import HistoryInfoModal from '../../molecules/HistoryInfoModal'
import { useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'

const HistoryList: FC<IHistory> = ({ data }) => {

  const { themeApp } = useAppSelector(state => state.main)

  const COLORS = getThemeApp(themeApp)

  const [historyInfo, setHistoryInfo] = useState(false)

  const renderItem = ({ item }) => {
      return <HistoryItem data={item} setData={setHistoryInfo}/>
  };

  return (
    <View style={[styles.container, { backgroundColor:COLORS.colorBlack }]}>
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
