import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const CategoriesSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 224.075 224.075"
    style={{
      enableBackground: "new 0 0 224.075 224.075",
    }}
    width={20}
    height={20}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
    fill={props.color}
    stroke={props.color}
    d="M63 27.841h146.9c18.9.5 18.9-28.3 0-27.8H63c-18.9-.5-18.9 28.3 0 27.8zM209.9 98.141H63c-18.9-.5-18.9 28.3 0 27.8h146.9c18.9.5 18.9-28.3 0-27.8zM209.9 195.741H63c-18.9 0-18.9 28.3 0 28.3h146.9c18.9 0 18.9-28.3 0-28.3zM14.2 195.641c-7.9 0-14.2 6.3-14.2 14.2s6.3 14.2 14.2 14.2c7.3 0 13.6-6.3 13.6-14.2 0-7.8-6.3-14.1-13.6-14.2zM14.2 98.141c-7.9 0-14.2 6.3-14.2 13.6 0 7.9 6.3 14.2 14.2 14.2 7.3 0 13.6-6.3 13.6-14.2 0-7.3-6.3-13.6-13.6-13.6zM14.2.041C6.3.041 0 6.341 0 14.241c0 7.3 6.3 13.6 14.2 13.6 7.3 0 13.6-6.3 13.6-13.6 0-7.9-6.3-14.2-13.6-14.2z" />
  </Svg>
)


// fill={props.color}
// stroke={props.color}
// width={30}
// height={30}