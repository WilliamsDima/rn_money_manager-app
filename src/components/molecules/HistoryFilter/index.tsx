import React, { FC } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { COLORS } from '../../../services/colors'
import { IconSvg } from '../../../services/icons'
import { TAB_CATEGORIES } from '../../../services/iconsName'
import { globalStyles } from '../../../services/styles'
import { styles } from './list.styles'
import { IHistory } from './list.types'
import FilterPeriod from '../../atoms/FilterPeriod'
import CarouselFilter from '../CarouselFilter'
import { useTranslation } from 'react-i18next'

const HistoryFilter: FC<IHistory> = React.memo(({ setFilter, setCategori }) => {

  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <FilterPeriod />
      <CarouselFilter />
      <View style={styles.item}>

          <TouchableOpacity onPress={() => setCategori(true)}>
            <Text style={globalStyles.p1}>{t('Categories')}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
          style={styles.btn} 
          onPress={() => setFilter(true)}>
            <Text style={[globalStyles.p1, {marginRight: 5}]}>
              {t('filter')}
            </Text>
            <IconSvg name={TAB_CATEGORIES} color={COLORS.colorPriamry}/>
          </TouchableOpacity>
      </View>
    </View>
  )
})

export default HistoryFilter
