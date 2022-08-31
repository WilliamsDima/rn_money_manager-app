import React, { FC, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text } from 'react-native'
import { styles } from './header.styles'
import HeaderAccaunt from '../HeaderAccaunt'
import HistoryBtn from '../../atoms/HistoryBtn'
import CustomModal from '../../atoms/Modal'
import AccauntsModal from '../../organisms/AccauntsModal'

interface IHeaderMain {
  
}

const HeaderMain: FC<IHeaderMain> = ({routeName}) => {

  const navigation = useNavigation()

  const [modal, setModal] = useState(false)

  return (
    <View style={styles.header}>
      <HeaderAccaunt onPress={() => setModal(!modal)}/>
      <HistoryBtn />

      <CustomModal
      visible={modal}
      animationType={'fade'}
      closeHandler={setModal}>
        <AccauntsModal close={setModal}/>
      </CustomModal>
    </View>
  )
}

export default HeaderMain
