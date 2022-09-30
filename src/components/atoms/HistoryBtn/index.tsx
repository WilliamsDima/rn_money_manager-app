import React, { FC } from 'react'
import { View } from 'react-native'
import { IconSvg } from '../../../services/icons'
import { HISTORY } from '../../../services/iconsName'
import { styles } from './button.styles'
import { IButton } from './button.types'

const HistoryBtn: FC<IButton> = ({}) => {
  
  return (
    <View
      style={[styles.button]}>
      <IconSvg name={HISTORY}/>
    </View>
  )
}

export default HistoryBtn
