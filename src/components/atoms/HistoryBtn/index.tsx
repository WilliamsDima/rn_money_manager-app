import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { IconSvg } from '../../../services/icons'
import { HISTORY } from '../../../services/iconsName'
import { styles } from './button.styles'
import { IButton } from './button.types'

const HistoryBtn: FC<IButton> = ({}) => {
  
  return (
    <TouchableOpacity
      style={[styles.button]}>
      <IconSvg name={HISTORY}/>
    </TouchableOpacity>
  )
}

export default HistoryBtn
