import React from 'react'
import { View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import Countainer from '../../atoms/Container'
import GreenWrapper from '../../atoms/GreenWrapper'
import FilterContent from '../../molecules/FilterContent'
import HeaderMain from '../../molecules/HeaderMain'
import MainContetn from '../../organisms/MainContent'
import { styles } from './main.styles'

const MainTemplate = () => {

  return (
      <Countainer overStyle={{paddingHorizontal: 0}}>
        <GreenWrapper>
          <HeaderMain />
        </GreenWrapper>

        <View style={globalStyles.spaceHorizontal}>
          <FilterContent />
        </View>

        <MainContetn />

      </Countainer>
  )
}

export default MainTemplate
