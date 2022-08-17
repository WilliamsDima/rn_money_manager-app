import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import { styles } from './diogramma.styles'
import { IDiogramma } from './diogramma.types'

const Diogramma: FC<IDiogramma> = ({}) => {
  
  return (
    <View style={[styles.container]}>
      <Text style={globalStyles.p1}>Diogramma</Text>
    </View>
  )
}

export default Diogramma
