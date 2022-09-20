import React, { FC } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { IconSvg } from '../../../services/icons'
import { ARROW_SELECT } from '../../../services/iconsName'
import { globalStyles } from '../../../services/styles'
import { styles } from './filter.styles'

interface IFilter {
  setFilter: () => void
  filter: boolean
}

const FilterList: FC<IFilter> = ({setFilter, filter}) => {
  
  return (
    <View style={[styles.container]}>
      <TouchableOpacity style={styles.btn} onPress={() => setFilter(!filter)}>
        <Text style={[globalStyles.p1, {marginRight: 10}]}>
          {filter ? 'По возрастанию' : 'По убыванию'}
        </Text>

        <View style={[{marginTop: -5}, !filter 
          && {transform: [{rotate: '-180deg'}], marginTop: 5}]}>
          <IconSvg name={ARROW_SELECT} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default FilterList
