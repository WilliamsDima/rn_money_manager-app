import React, { FC } from 'react'
import { View } from 'react-native'
import { styles } from './container.styles'
import { ICountainer } from './container.types'

const GreenWrapper: FC<ICountainer> = ({children, overStyle}) => {


  return (
    <View style={[styles.container, overStyle]}>
      {children}
    </View>
  )
}

export default GreenWrapper
