import React, { FC } from 'react'
import { TouchableOpacity, View, Text, ViewStyle } from 'react-native'
import { IconSvg } from '../../../services/icons'
import { ARROW_SELECT } from '../../../services/iconsName'
import { globalStyles } from '../../../services/styles'
import { styles } from './filter.styles'
import { useTranslation } from 'react-i18next'
import { COLORS } from '../../../services/colors'

interface IFilter {
  setFilter: () => void
  filter: boolean
  overStyle?: ViewStyle
}

const FilterList: FC<IFilter> = ({setFilter, filter, overStyle}) => {

  const { t } = useTranslation()
  
  return (
    <View style={[styles.container, overStyle]}>
      <TouchableOpacity style={styles.btn} onPress={() => setFilter(!filter)}>
        <Text style={[globalStyles.p1, {marginRight: 10, color: COLORS.colorText}]}>
          {filter ? t('Ascending') : t('Descending')}
        </Text>

        <View style={[{marginTop: -5}, !filter 
          && {transform: [{rotate: '-180deg'}], marginTop: 5}]}>
          <IconSvg name={ARROW_SELECT} color={COLORS.colorText}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default FilterList
