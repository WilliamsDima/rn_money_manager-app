import React, { useState } from 'react'
import { View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import BigModal from '../../atoms/BigModal'
import GreenWrapper from '../../atoms/GreenWrapper'
import FilterContent from '../../molecules/FilterContent'
import HeaderMain from '../../molecules/HeaderMain'
import ExpAndIncModal from '../../organisms/ExpAndIncModal'
import MainContetn from '../../organisms/MainContent'
import { styles } from './main.styles'

const MainTemplate = () => {

  const [expAndEncomeModal, setExpAndEncomeModal] = useState(false)

  return (
      <>
        <GreenWrapper>
          <HeaderMain />
        </GreenWrapper>

        <View style={globalStyles.spaceHorizontal}>
          <FilterContent setExpAndEncomeModal={setExpAndEncomeModal}/>
        </View>

        <MainContetn />

        <BigModal visible={expAndEncomeModal} closeHandler={setExpAndEncomeModal}>
            <ExpAndIncModal />
        </BigModal>

      </>
  )
}

export default MainTemplate
