import React, { useState } from 'react'
import { View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import CustomModal from '../../atoms/Modal'
import GreenWrapper from '../../atoms/GreenWrapper'
import FilterContent from '../../molecules/FilterContent'
import HeaderMain from '../../molecules/HeaderMain'
import ExpAndIncModal from '../../organisms/ExpAndIncModal'
import MainContent from '../../organisms/MainContent'
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

        <MainContent />

        <CustomModal visible={expAndEncomeModal} closeHandler={setExpAndEncomeModal}>
            <ExpAndIncModal setExpAndEncomeModal={setExpAndEncomeModal}/>
        </CustomModal>

      </>
  )
}

export default MainTemplate
