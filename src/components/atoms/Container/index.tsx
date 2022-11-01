import React, { FC } from 'react'
import { SafeAreaView } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
import { styles } from './container.styles'
import { ICountainer } from './container.types'

const Container: FC<ICountainer> = ({children, overStyle}) => {

  const { themeApp } = useAppSelector(state => state.main)

  const { colorLightBlack } = getThemeApp(themeApp)

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colorLightBlack}, {...overStyle}]}>
      {children}
    </SafeAreaView>
  )
}

export default Container
