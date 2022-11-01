import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const BusSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={37}
    viewBox="0 0 480 480"
    style={{
      enableBackground: "new 0 0 480 480",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
    fill={props.color || '#fff'}
    stroke={props.color || '#fff'}
    d="M460 31.7h-31.9V10c0-5.5-4.5-10-10-10H61.9c-5.5 0-10 4.5-10 10v21.7H20c-5.5 0-10 4.5-10 10v72.6c0 5.5 4.5 10 10 10s10-4.5 10-10V51.7h21.9v355.7c0 5.5 4.5 10 10 10h42.4V470c0 5.5 4.5 10 10 10h41.9c5.5 0 10-4.5 10-10v-52.6h147.6V470c0 5.5 4.5 10 10 10h41.9c5.5 0 10-4.5 10-10v-52.6h42.4c5.5 0 10-4.5 10-10V51.7H450v62.6c0 5.5 4.5 10 10 10s10-4.5 10-10V41.7c0-5.5-4.5-10-10-10zM71.9 20H230v241.3H71.9V20zm74.3 440h-21.9v-42.6h21.9V460zm209.5 0h-21.9v-42.6h21.9V460zm52.4-62.6H71.9V281.3h336.2v116.1zm0-136.1H250V20h158.1v241.3z" />
    <Path
    fill={props.color || '#fff'}
    stroke={props.color || '#fff'} 
    d="m122.1 343.4 31 10c1 .3 2.1.5 3.1.5 4.2 0 8.1-2.7 9.5-6.9 1.7-5.3-1.1-10.9-6.4-12.6l-31-10c-5.3-1.7-10.9 1.1-12.6 6.4s1.1 10.9 6.4 12.6zM323.8 353.9c1 0 2.1-.1 3.1-.5l31-10c5.2-1.7 8.1-7.3 6.4-12.6-1.7-5.2-7.3-8.1-12.6-6.4l-31 10c-5.2 1.7-8.1 7.3-6.4 12.6 1.4 4.2 5.3 6.9 9.5 6.9z" />
  </Svg>
)

// fill={props.color}
// stroke={props.color}