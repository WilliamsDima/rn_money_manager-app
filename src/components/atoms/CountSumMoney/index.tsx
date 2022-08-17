import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import { styles } from './count.styles'
import { ICount } from './count.types'

const CountSumMoney: FC<ICount> = ({}) => {
  
  return (
    <View style={[styles.container]}>
      <Text style={[globalStyles.p2]}>5 000 p</Text>
    </View>
  )
}

export default CountSumMoney
