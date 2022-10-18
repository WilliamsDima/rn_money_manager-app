import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../../services/colors"

export const EnergySvg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <Path
    fill={props.color || COLORS.colorPriamry}
    stroke={props.color || COLORS.colorPriamry}
      d="M30.64 0H15.57L9.547 21.695h6.035l-5.133 18.489h1.809l17.476-21.696h-8.851Zm0 0"
    />
  </Svg>
)

// fill={props.color}
// stroke={props.color}