import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import { styles } from './rate.styles'
import { IRate } from './rate.types'

const Rate: FC<IRate> = ({}) => {
  
  return (
    <View style={[styles.container]}>
      <Text style={[{marginRight: 10}, globalStyles.p1]}>61 $</Text>
      <Text style={[globalStyles.p1]}>70 E</Text>
    </View>
  )
}

export default Rate
