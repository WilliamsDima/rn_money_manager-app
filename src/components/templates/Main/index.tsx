import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import CustomModal from '../../atoms/Modal'
import GreenWrapper from '../../atoms/GreenWrapper'
import FilterContent from '../../molecules/FilterContent'
import HeaderMain from '../../molecules/HeaderMain'
import ExpAndIncModal from '../../organisms/ExpAndIncModal'
import MainContent from '../../organisms/MainContent'
 
const MainTemplate = () => {

  const [expAndEncomeModal, setExpAndEncomeModal] = useState(false)

  const [hideDiogram, setHideDiogram] = useState(false)

  const onScroll = (e) => {
    if (e.nativeEvent.contentOffset.y > 90) {
      setHideDiogram(true)
    }
    if (e.nativeEvent.contentOffset.y === 0) {
      setHideDiogram(false)
    }
  }

  return (
      <>
        <GreenWrapper>
          <HeaderMain />
        </GreenWrapper>

        <View style={globalStyles.spaceHorizontal}>
          <FilterContent 
          hideDiogram={hideDiogram}
          setExpAndEncomeModal={setExpAndEncomeModal}/>
        </View>

        <MainContent 
        onScroll={onScroll}/>

        <CustomModal visible={expAndEncomeModal} closeHandler={setExpAndEncomeModal}>
            <ExpAndIncModal setExpAndEncomeModal={setExpAndEncomeModal}/>
        </CustomModal>

      </>
  )
}

export default MainTemplate
