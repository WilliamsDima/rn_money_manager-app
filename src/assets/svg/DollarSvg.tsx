import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../services/colors"

const DollarSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 329.991 329.991"
    style={{
      enableBackground: "new 0 0 329.991 329.991",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
                fill={props.color || COLORS.colorPriamry}
                stroke={props.color || COLORS.colorPriamry}
    d="M179.996 151.501v-88.93c17.458 6.192 30 22.865 30 42.42 0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-36.219-25.808-66.523-60-73.491V15c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15v16.5c-34.192 6.968-60 37.272-60 73.491s25.808 66.522 60 73.491v88.929c-17.459-6.192-30-22.865-30-42.42 0-8.284-6.716-15-15-15s-15 6.716-15 15c0 36.219 25.808 66.523 60 73.491v16.509c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-16.509c34.192-6.968 60-37.272 60-73.491s-25.809-66.522-60-73.49zm-60-46.51c0-19.555 12.541-36.228 30-42.42v84.84c-17.459-6.192-30-22.865-30-42.42zm60 162.42v-84.84c17.458 6.192 30 22.865 30 42.42s-12.542 36.228-30 42.42z" />
  </Svg>
)

export default DollarSvg
