import React from 'react'
import { ScrollView, Text } from 'react-native'
import Count from '../../atoms/Count/Count'
import Buttons from '../../molecules/Buttons/Buttons'
import { styles } from './main.styles'

const MainTemplate = () => {
  return (
    <ScrollView style={styles.container}>
        <Count />
        <Buttons />
    </ScrollView>
  )
}

export default MainTemplate
