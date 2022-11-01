import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const EnergySvg = (props) => (
  <Svg
    width={30}
    height={30}
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fill={props.color || '#fff'}
      stroke={props.color || '#fff'}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M23 1H11L9 19h4l-2 12 12-20h-4z"
    />
  </Svg>
)

// fill={props.color}
// stroke={props.color}