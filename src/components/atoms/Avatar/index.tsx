import React, { FC } from 'react'
import { View } from 'react-native'
import { styles } from './avatar.styles'
import { IAvatar } from './avatar.types'

const Avatar: FC<IAvatar> = ({children, overStyle, bg}) => {
  
  return (
    <View style={[styles.avatar, {backgroundColor: bg}, overStyle]}>
      {children}
    </View>
  )
}

export default Avatar
