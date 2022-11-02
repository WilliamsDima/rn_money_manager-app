import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { countSumTransaction, dataFilterMaxValue, numberConverter } from '../../../hooks/helpers'
import { useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { styles } from './list.styles'
import { IHistory } from './list.types'
import { useTranslation } from 'react-i18next'

const HistoryStatisticList: FC<IHistory> = React.memo(({ data }) => {

  const { t } = useTranslation()

  const { currencyValue, themeApp, categoriesSortData } = useAppSelector(state => state.main)

  const COLORS = getThemeApp(themeApp)

  const sortCategoryTop = dataFilterMaxValue(categoriesSortData, true)
  const filterTransaction = data?.filter((item) => !item.transaction)
  const sum = filterTransaction?.length ? countSumTransaction(filterTransaction) : 0

  let colorSum = {}
  colorSum = sum > 0 ? {color: COLORS.mainColor} : {color: COLORS.colorRed}

  return (
    <View style={styles.container}>
      <Text style={[globalStyles.p1, {color: COLORS.colorText}, {textTransform: 'uppercase'}]}>{t('top')} 
      : {sortCategoryTop[0]?.name || '-'}</Text>
      <Text style={[globalStyles.p1, {color: COLORS.colorText}]}>{t('total')}:
        <Text 
        style={colorSum}> {sum < 0 ? numberConverter(sum * -1) 
        : numberConverter(sum)} {currencyValue}
        </Text> 
      </Text>
    </View>
  )
})

export default HistoryStatisticList
