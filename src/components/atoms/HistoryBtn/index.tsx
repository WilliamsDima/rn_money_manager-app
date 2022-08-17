import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { IconSvg } from '../../../services/icons'
import { styles } from './button.styles'
import { IButtonTabBar } from './button.types'

const HistoryBtn: FC<IButtonTabBar> = ({}) => {
  
  return (
    <TouchableOpacity
      style={[styles.button]}>
      <IconSvg name={'history'}/>
    </TouchableOpacity>
  )
}

export default HistoryBtn