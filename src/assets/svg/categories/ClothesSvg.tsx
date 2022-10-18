import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../../services/colors"

export const ClothesSvg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" 
  width={37}
  height={37}
  viewBox="0 0 14 14" {...props}>
    <Path
      d="M3 1 0 3l1 3.35L3 5v8h8V5l2 1.35L14 3l-3-2H9c0 1-1 2-2 2S5 2 5 1z"
      fill={props.color || COLORS.colorPriamry}
      stroke={props.color || COLORS.colorPriamry}
    />
  </Svg>
)

// fill={props.color}
// stroke={props.color}