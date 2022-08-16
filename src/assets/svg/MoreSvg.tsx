import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const MoreSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 210 210"
    style={{
      enableBackground: "new 0 0 210 210",
    }}
    width={24}
    height={24}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
    fill={props.color || '#fff'}
    stroke={props.color || '#fff'}
    
    d="M25 80C11.215 80 0 91.215 0 105s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25zM105 80c-13.785 0-25 11.215-25 25s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25zM185 80c-13.785 0-25 11.215-25 25s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25z" />
  </Svg>
)


// fill={props.color}
// stroke={props.color}
// width={30}
// height={30}