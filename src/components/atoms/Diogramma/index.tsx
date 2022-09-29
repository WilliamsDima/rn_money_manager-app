import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { styles } from './diogramma.styles'
import { IDiogramma } from './diogramma.types'
import PieChart from 'react-native-pie-chart'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import DiogrammaLine from '../DiogrammaLine'

const Diogramma: FC<IDiogramma> = ({sortArray, hideDiogram}) => {

  const height = hideDiogram ? 0 : 150

  const widthAndHeight = 150
  const series = []
  const sliceColor = []

  if (sortArray.length) {
    sortArray.forEach((c) => {
      series.push(+c.count);
      sliceColor.push(c.bg);
    });
  }

  console.log('height', height);

  const diogramm = hideDiogram ? <DiogrammaLine sortArray={sortArray}/>
  : <PieChart
    widthAndHeight={widthAndHeight}
    series={series}
    sliceColor={sliceColor}
    doughnut={true}
    coverRadius={0.5}
    coverFill={COLORS.colorBlack}
  />
  
  
  return (
    <View style={[styles.container]}>
      {sortArray.length ? diogramm :
      <Text style={[globalStyles.p1, {opacity: 0.6}]}>ПУСТО</Text>}
    </View>
  )
}

export default Diogramma
