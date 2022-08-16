import React, { FC } from "react"
import { View } from "react-native"

const ArrowSelectSvg: FC = (props) => (
  <View style={[{width: 10, height: 10, 
  borderColor: props.color || '#fff',
  borderBottomWidth: 2,
  borderLeftWidth: 2,
  transform: [{rotate: '-45deg'}]}, {...props}]}>

  </View>
)

export default ArrowSelectSvg
