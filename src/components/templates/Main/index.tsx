import React from 'react'
import { ScrollView, Text } from 'react-native'
import Countainer from '../../atoms/Container'
import GreenWrapper from '../../atoms/GreenWrapper'
import { styles } from './main.styles'

const MainTemplate = () => {
  return (
      <Countainer overStyle={{paddingHorizontal: 0}}>
        <GreenWrapper>
          <Text style={{color: '#fff'}}>Main</Text>
        </GreenWrapper>
      </Countainer>
  )
}

export default MainTemplate
