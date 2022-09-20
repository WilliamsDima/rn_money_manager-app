import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { styles } from './empty.styles'
import { IEmpty } from './empty.types'

const DataListEmpty: FC<IEmpty> = ({text}) => {
  
  return (
    <View style={globalStyles.spaceHorizontal}>
      <View style={[styles.contetn]}>
        <Text style={[globalStyles.h2, {color: COLORS.colorSecondary, textAlign: 'center'}]}>
          Нет {text} за выбранный период
        </Text>
      </View>
    </View>
  )
}

export default DataListEmpty
