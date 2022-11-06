import React, { FC, useEffect } from 'react'
import { View, } from 'react-native'
import { styles } from './diogramma.styles'
import { IDiogramma } from './diogramma.types'
import { useAppSelector } from '../../../hooks/hooks'
import { countInterest } from '../../../hooks/helpers'

const DiogrammaLine: FC<IDiogramma> = ({sortArray}) => {

  const { sumMoneySort } = useAppSelector(state => state.main) 

  useEffect(() => {
    console.log('DiogrammaLine', sumMoneySort)
    
  }, [])
  
  return (
    <View style={[styles.container]}>
      {sortArray.map((item) => {
        const interest = countInterest(+sumMoneySort, +item.count) + '%'
        return <View key={item.id} style={[{width: interest, backgroundColor: item.bg}]}/>
      })}
    </View>
  )
}

export default DiogrammaLine
