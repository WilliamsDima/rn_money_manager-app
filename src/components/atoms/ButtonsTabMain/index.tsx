import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import { styles } from './button.styles'
import { IButtonTabMain } from './button.types'

const ButtonsTabMain: FC<IButtonTabMain> = ({}) => {
  
  return (
    <View style={styles.tabs}>
      <TouchableOpacity style={styles.item}>
        <Text style={[globalStyles.p2, styles.text]}>Траты</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={[globalStyles.p2, styles.text]}>Доходы</Text>
      </TouchableOpacity>
      <View style={styles.line}/>
    </View>
  )
}

export default ButtonsTabMain
