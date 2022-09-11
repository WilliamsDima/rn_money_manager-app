import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from './button.styles'
import { IButton } from './button.types'

const Button: FC<IButton> = ({onPress, children, overStyle}) => {
  
  return (
    <TouchableOpacity
      style={[styles.button, overStyle]}
      onPress={onPress}
    >
     {children}
    </TouchableOpacity>
  )
}

export default Button
