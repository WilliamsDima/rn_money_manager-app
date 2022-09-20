import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { numberConverter } from '../../../hooks/helpers'
import { useAppSelector } from '../../../hooks/hooks'
import { globalStyles } from '../../../services/styles'
import { styles } from './count.styles'
import { ICount } from './count.types'

const CountSumMoney: FC<ICount> = ({}) => {

  const { sumMoneySort } = useAppSelector(state => state.main)
  
  return (
    <View style={[styles.container]}>
      <Text style={[globalStyles.p2]}>{numberConverter(sumMoneySort)} P</Text>
    </View>
  )
}

export default CountSumMoney
