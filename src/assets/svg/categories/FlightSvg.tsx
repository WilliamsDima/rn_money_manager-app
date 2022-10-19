import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../../services/colors"

export const FlightSvg = (props) => (
  <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
        fill={props.color || COLORS.colorPriamry}
        stroke={props.color || COLORS.colorPriamry}
     d="M22 16.21v-1.895L14 8V4a2 2 0 0 0-4 0v4.105L2 14.42v1.789l8-2.81V18l-3 2v2l5-2 5 2v-2l-3-2v-4.685l8 2.895z" />
  </Svg>
)

// fill={props.color}
// stroke={props.color}