import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import Countainer from '../../atoms/Container'
import GreenWrapper from '../../atoms/GreenWrapper'
import FilterContent from '../../molecules/FilterContent'
import HeaderMain from '../../molecules/HeaderMain'
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

        
      </Countainer>
  )
}

export default MainTemplate
