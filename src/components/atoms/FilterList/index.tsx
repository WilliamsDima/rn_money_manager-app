import React, { FC } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { IconSvg } from '../../../services/icons'
import { ARROW_SELECT } from '../../../services/iconsName'
import { globalStyles } from '../../../services/styles'
import { styles } from './filter.styles'

const FilterList: FC = ({}) => {
  
  return (
    <View style={[styles.container]}>
      <TouchableOpacity style={styles.btn}>
        <Text style={[globalStyles.p1, {marginRight: 10}]}>По возрастанию</Text>

        <View style={{marginTop: -5}}>
          <IconSvg name={ARROW_SELECT} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default FilterList
