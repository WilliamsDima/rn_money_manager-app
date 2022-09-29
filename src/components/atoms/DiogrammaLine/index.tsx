import React, { FC } from 'react'
import { View, } from 'react-native'
import { styles } from './diogramma.styles'
import { IDiogramma } from './diogramma.types'
import { useAppSelector } from '../../../hooks/hooks'
import { countInterest } from '../../../hooks/helpers'

const DiogrammaLine: FC<IDiogramma> = ({sortArray}) => {

  const { sumCategiesCountSort } = useAppSelector(state => state.main) 

  return (
    <View style={[styles.container]}>
      {sortArray.map((item) => {
        const interest = countInterest(+sumCategiesCountSort, +item.count) + '%'
        return <View style={[{width: interest, backgroundColor: item.bg}]}/>
      })}
    </View>
  )
}

export default DiogrammaLine
