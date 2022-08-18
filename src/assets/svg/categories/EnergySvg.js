import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const EnergySvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      enableBackground: "new 0 0 88.408 88.408",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
    
    fill={props.color}
    stroke={props.color}
    d="M67.41 0H34.256L20.999 47.732h13.284L22.988 88.408h3.979l38.451-47.734H45.939z" />
  </Svg>
)

// fill={props.color}
// stroke={props.color}