import React, { FC } from 'react'
import { SafeAreaView } from 'react-native'
import { styles } from './container.styles'
import { ICountainer } from './container.types'

const Countainer: FC<ICountainer> = ({children, overStyle}) => {

  return (
    <SafeAreaView style={[styles.container, {...overStyle}]}>
      {children}
    </SafeAreaView>
  )
}

export default Countainer
