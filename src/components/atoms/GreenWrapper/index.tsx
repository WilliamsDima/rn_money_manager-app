import React, { FC } from 'react'
import { View } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
import { styles } from './container.styles'
import { ICountainer } from './container.types'

const GreenWrapper: FC<ICountainer> = ({children, overStyle}) => {

  const { themeApp } = useAppSelector(state => state.main)

  const { colorHeader } = getThemeApp(themeApp)

  return (
    <View style={[styles.container, { backgroundColor: colorHeader }, overStyle]}>
      {children}
    </View>
  )
}

export default GreenWrapper
