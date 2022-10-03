import React, { FC, useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from './diogramma.styles'
import { IDiogramma } from './diogramma.types'
import PieChart from 'react-native-pie-chart'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import DiogrammaLine from '../DiogrammaLine'
import { useAppSelector } from '../../../hooks/hooks'

const Diogramma: FC<IDiogramma> = ({sortArray, hideDiogram}) => {

  const { categories } = useAppSelector(state => state.main) 

  const widthAndHeight = 150
  const series = []
  const sliceColor = []

  if (sortArray.length) {
    sortArray.forEach((c) => {
      if (c.count) {
        series.push(+c.count);
        sliceColor.push(c.bg);
      }
    });
  }

  const diogramm = hideDiogram ? <DiogrammaLine sortArray={sortArray}/>
  : <PieChart
    widthAndHeight={widthAndHeight}
    series={series}
    sliceColor={sliceColor}
    doughnut={true}
    coverRadius={0.5}
    coverFill={COLORS.colorBlack}
  />
  
  useEffect(() => {
    console.log('Diogramma');
  }, [categories])
  
  return (
    <View style={[styles.container]}>
      {sortArray.length && sliceColor.length ? diogramm :
      <Text style={[globalStyles.p1, {opacity: 0.6}]}>ПУСТО</Text>}
    </View>
  )
}

export default Diogramma
