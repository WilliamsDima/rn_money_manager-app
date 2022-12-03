import React, { FC, useEffect } from 'react'
import { View, Text, Alert } from 'react-native'
import { styles } from './diogramma.styles'
import { IDiogramma } from './diogramma.types'
import { getThemeApp } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { rateAPI } from '../../../api/http/rateAPI'
import { setCurrency } from '../../../store/redusers/main/main'
import { useTranslation } from 'react-i18next'
import { ICurrencySelect } from '../../../store/redusers/main/types'
import DiogrammContent from '../../molecules/DiagrammContent'

const Diogramma: FC<IDiogramma> = React.memo(({sortArray, hideDiogram}) => {

  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const { categories, currencySelect, currencyValue, themeApp, developerMode } = useAppSelector(state => state.main)

  const { colorText } = getThemeApp(themeApp)

  const dataDiogramm = []

  if (sortArray.length) {
    sortArray.forEach((c) => {
      if (c.count) {
        const item = {
          population: +c.count,
          color: c.bg,
        }

        dataDiogramm.push(item)
      }
    })
  }

  const getCurrency = async () => {
    
    const first = await rateAPI.getCurrency(currencyValue.toLocaleLowerCase(), currencySelect[0].toLocaleLowerCase())
    const second = await rateAPI.getCurrency(currencyValue.toLocaleLowerCase(), currencySelect[1].toLocaleLowerCase())

    const data: ICurrencySelect = {
      first: {
        code: currencySelect[0],
        count: first[currencyValue.toLocaleLowerCase()]?.toFixed(3)
      },
      second: {
        code: currencySelect[1],
        count: second[currencyValue.toLocaleLowerCase()]?.toFixed(3)
      }
    }
    
    if (developerMode) {
      Alert.alert(
        'Курсы валют',
        `${data.first.code + ' - ' + data.first.count}
         ${data.second.code + ' - ' + data.second.count}`,
      );
    } else {
      console.log(data);
    }
  
    
    dispatch(setCurrency(data))
  }

  
  useEffect(() => {
    console.log('Diogramma')
    getCurrency()
  }, [categories, currencySelect, currencyValue, developerMode])
  
  return (
    <View style={[styles.container, 
      dataDiogramm.length && !hideDiogram ? {marginTop: -30} : {marginTop: 0},
      !hideDiogram ? {marginBottom: 10} : {marginBottom: 10}]}>
      {sortArray.length && dataDiogramm.length ? 
      <DiogrammContent sortArray={sortArray} data={dataDiogramm} hideDiogram={hideDiogram}/> 
      : <Text style={[globalStyles.p1, {opacity: 0.6, color: colorText}]}>{t('EMPTY')}</Text>}
    </View>
  )
})

export default Diogramma
