import React, { FC } from 'react'
import { TextInput } from 'react-native'
import { COLORS } from '../../../services/colors'
import { styles } from './Input.styles'
import { IInput } from './Input.types'

const Input: FC<IInput> = (props) => {

  return <TextInput 
  placeholderTextColor={COLORS.colorText}
  style={[styles.input, props?.overStyle]}
  {...props}/>
}

export default Input
