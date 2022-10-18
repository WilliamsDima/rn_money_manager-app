import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../../services/colors"

export const TaxiSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 206.498 206.498"
    style={{
      enableBackground: "new 0 0 206.498 206.498",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
    fill={props.color || COLORS.colorPriamry}
    stroke={props.color || COLORS.colorPriamry}
    d="M108.499 75.249h-31.5a3.5 3.5 0 0 0-3.5 3.5v49a3.5 3.5 0 1 0 7 0v-21h24.5v21a3.5 3.5 0 1 0 7 0v-49a3.5 3.5 0 0 0-3.5-3.5zm-3.5 24.5h-24.5v-17.5h24.5v17.5zM62.999 75.249h-35a3.5 3.5 0 1 0 0 7h14v45.625a3.5 3.5 0 1 0 7 0V82.249h14a3.5 3.5 0 1 0 0-7zM174.999 75.249a3.5 3.5 0 0 0-3.5 3.5v49.125a3.5 3.5 0 1 0 7 0V78.749a3.5 3.5 0 0 0-3.5-3.5zM159.701 76.031a3.502 3.502 0 0 0-4.881.827l-14.49 20.4-14.49-20.4a3.5 3.5 0 1 0-5.708 4.054l15.904 22.391-15.904 22.391a3.501 3.501 0 0 0 5.707 4.054l14.49-20.4 14.49 20.4a3.5 3.5 0 0 0 5.707-4.054l-15.904-22.391 15.904-22.391a3.5 3.5 0 0 0-.825-4.881z" />
    <Path 
    fill={props.color || COLORS.colorPriamry}
    stroke={props.color || COLORS.colorPriamry}
    d="m206.471 144.815-10.499-84a3.5 3.5 0 0 0-3.473-3.066h-178.5a3.498 3.498 0 0 0-3.472 3.066l-10.5 84a3.494 3.494 0 0 0 .849 2.75 3.493 3.493 0 0 0 2.623 1.184h199.5c1.003 0 1.96-.43 2.623-1.184a3.493 3.493 0 0 0 .849-2.75zM7.465 141.749l9.625-77h172.32l9.625 77H7.465z" />
  </Svg>
)

// fill={props.color}
// stroke={props.color}