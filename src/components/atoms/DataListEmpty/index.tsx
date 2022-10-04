import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { styles } from './empty.styles'
import { IEmpty } from './empty.types'

const DataListEmpty: FC<IEmpty> = ({text, overStyle}) => {
  
  return (
    <View style={globalStyles.spaceHorizontal}>
      <View style={[styles.contetn, overStyle]}>
        <Text style={[globalStyles.h2, {color: COLORS.colorSecondary, textAlign: 'center'}]}>
          {text}
        </Text>
      </View>
    </View>
  )
}

export default DataListEmpty
