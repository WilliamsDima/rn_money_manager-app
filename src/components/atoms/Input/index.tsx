import React, { FC } from 'react'
import { TextInput } from 'react-native'
import { styles } from './Input.styles'
import { IInput } from './Input.types'

const Input: FC<IInput> = (props) => {

  const {overStyle} = props
  
  return (
    <TextInput 
      style={[styles.input, overStyle]}
      {...props}
    />
  )
}

export default Input
