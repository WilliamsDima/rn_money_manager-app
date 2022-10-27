import React, { FC, useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from './diogramma.styles'
import { IDiogramma } from './diogramma.types'
import PieChart from 'react-native-pie-chart'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import DiogrammaLine from '../DiogrammaLine'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { rateAPI } from '../../../api/http/rateAPI'
import { setCurrency } from '../../../store/redusers/main/main'
import { numberConverter } from '../../../hooks/helpers'
import { useTranslation } from 'react-i18next'

const Diogramma: FC<IDiogramma> = ({sortArray, hideDiogram}) => {

  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const { categories, currency, currencySelect, sumMoneySort, currencyValue } = useAppSelector(state => state.main)

  const widthAndHeight = 180
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

  const diogramm = hideDiogram ? <View style={{alignItems: 'center'}}>
    <DiogrammaLine sortArray={sortArray}/>
    <Text style={[globalStyles.p2]}>
          {numberConverter(sumMoneySort)} {currencyValue}
        </Text>
  </View> 
  : <View style={styles.wrapperDiagremm}>
      
      {currency && <Text style={globalStyles.p1}>
        {(+currency?.data?.USDRUB).toFixed(2)} $
      </Text>}
    <PieChart
      widthAndHeight={widthAndHeight}
      series={series}
      sliceColor={sliceColor}
      doughnut={true}
      coverRadius={0.5}
      coverFill={COLORS.colorBlack}
    />
      {currency && <Text style={globalStyles.p1}>
        {(+currency?.data?.EURRUB).toFixed(2)} E
      </Text>}
      <View style={styles.count}>
        <Text style={[globalStyles.p2]}>
          {numberConverter(sumMoneySort)} {currencyValue}
        </Text>
      </View>
  </View>

  const getCurrency = async () => {
    const data = await rateAPI.getCurrency(currencySelect)
    
    dispatch(setCurrency(data))
  }

  
  useEffect(() => {
    console.log('Diogramma');
    getCurrency()
  }, [categories])
  
  return (
    <View style={[styles.container, !hideDiogram ? {marginBottom: 0} : {marginBottom: 10}]}>
      {sortArray.length && sliceColor.length ? diogramm :
      <Text style={[globalStyles.p1, {opacity: 0.6}]}>{t('EMPTY')}</Text>}
    </View>
  )
}

export default Diogramma
