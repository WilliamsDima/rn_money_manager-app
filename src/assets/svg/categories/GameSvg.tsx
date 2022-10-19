import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../../services/colors"

export const GameSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={37}
    viewBox="0 0 489.95 489.95"
    style={{
      enableBackground: "new 0 0 489.95 489.95",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
    
    fill={props.color || COLORS.colorPriamry}
    stroke={props.color || COLORS.colorPriamry}
    d="M452.281 37.875c-50.5-50.5-132.1-50.5-182.6 0l-231.7 231.6c-50.5 50.5-50.5 132.1 0 182.6s132.1 50.5 182.6 0l231.6-231.6c50.2-50.5 50.2-132.1.1-182.6zm-104.2 17.1 23.3 23.3-23.3 23.3-23.3-23.3 23.3-23.3zm0 63.7 23.3 23.3-23.3 23.3-23.3-23.3 23.3-23.3zm-197.8 279.8c7 7 7 17.9 0 24.9s-17.9 7-24.9 0l-16.7-16.7-16.7 16.7c-7 7-17.9 7-24.9 0s-7-17.9 0-24.9l16.7-16.7-16.7-16.7c-7-7-7-17.9 0-24.9s17.9-7 24.9 0l16.7 16.7 16.7-16.7c7-7 17.9-7 24.9 0s7 17.9 0 24.9l-16.7 16.7 16.7 16.7zm84.4-19.4-123.6-123.6 144.6-144.6 123.6 123.6-144.6 144.6zm177.1-213.4-23.3-23.3 23.3-23.3 23.3 23.3-23.3 23.3zm0-63.7-23.3-23.3 23.3-23.3 23.3 23.3-23.3 23.3z" />
  </Svg>
)

// fill={props.color}
// stroke={props.color}