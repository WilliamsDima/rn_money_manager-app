import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { styles } from './empty.styles'
import { IEmpty } from './empty.types'

const DataListEmpty: FC<IEmpty> = ({text, overStyle}) => {

  const { themeApp } = useAppSelector(state => state.main)

  const { colorSecondary } = getThemeApp(themeApp)
  
  return (
    <View style={globalStyles.spaceHorizontal}>
      <View style={[styles.contetn, {borderColor: colorSecondary}, overStyle]}>
        <Text style={[globalStyles.h2, {color: colorSecondary, textAlign: 'center'}]}>
          {text}
        </Text>
      </View>
    </View>
  )
}

export default DataListEmpty
