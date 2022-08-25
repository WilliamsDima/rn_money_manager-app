import React from 'react'
import { View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import Countainer from '../../atoms/Container'
import GreenWrapper from '../../atoms/GreenWrapper'
import FilterContent from '../../molecules/FilterContent'
import HeaderMain from '../../molecules/HeaderMain'
import ListData from '../../molecules/ListData'
import MainContetn from '../../organisms/MainContent'
import { styles } from './main.styles'

const MainTemplate = () => {

  return (
      <>
        <GreenWrapper>
          <HeaderMain />
        </GreenWrapper>

        <View style={globalStyles.spaceHorizontal}>
          <FilterContent />
        </View>

        <MainContetn />

      </>
  )
}

export default MainTemplate
