import React, { FC, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import { styles } from './diagramm.styles'
import { IDiogramma } from './diagramm.types'
import { PieChart } from "react-native-chart-kit"
import DiogrammaLine from '../../atoms/DiogrammaLine'
import { getThemeApp } from '../../../services/colors'
import { useAppSelector } from '../../../hooks/hooks'
import { numberConverter } from '../../../hooks/helpers'

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 1, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const DiogrammContent: FC<IDiogramma> = React.memo(({hideDiogram, sortArray, data}) => {

  const { currency, sumMoneySort, 
    currencyValue, themeApp } = useAppSelector(state => state.main)

  const { colorText } = getThemeApp(themeApp)

  const diogramm = hideDiogram ? 
  
  
    <View style={{alignItems: 'center'}}>
        <DiogrammaLine sortArray={sortArray}/>
        <Text style={[globalStyles.p2, {color: colorText}]}>
            {numberConverter(sumMoneySort)} {currencyValue}
          </Text>
    </View> 
    : <View style={styles.wrapperDiagremm}>
      
      {currency && <Text style={[globalStyles.s3, , {color: colorText}]}>
        {currency?.first?.count} {currency?.first?.code} 
      </Text>}

      <PieChart
        data={data}
        width={200}
        height={200}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"50"}
        hasLegend={false}
      />
      
      {currency && <Text style={[globalStyles.s3, {color: colorText}]}>
        {currency?.second?.count} {currency?.second?.code} 
      </Text>}
      <View style={styles.count}>
        <Text style={[globalStyles.p1, {color: colorText}]}>
          {numberConverter(sumMoneySort)} {currencyValue}
        </Text>
      </View>
    </View>

  return (
    <>
      {diogramm}
    </>
  )
})

export default DiogrammContent
