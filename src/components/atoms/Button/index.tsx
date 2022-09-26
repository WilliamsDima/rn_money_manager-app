import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from './button.styles'
import { IButton } from './button.types'

const Button: FC<IButton> = ({onPress, children, overStyle, disabled}) => {
  
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, overStyle, disabled && styles.disabled]}
      onPress={onPress}
    >
     {children}
    </TouchableOpacity>
  )
}

export default Button
