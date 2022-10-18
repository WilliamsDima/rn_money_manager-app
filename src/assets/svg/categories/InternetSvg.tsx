import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../../services/colors"

export const InternetSvg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
    <Path
    fill={props.color || COLORS.colorPriamry}
    stroke={props.color || COLORS.colorPriamry}
      d="M20 25c-2.375 0-4.375 2-4.375 4.375s2 4.375 4.375 4.375 4.375-2 4.375-4.375S22.375 25 20 25ZM20 18.75c-3 0-5.875 1.25-7.875 3.5-.5.5-.375 1.25.125 1.75s1.25.375 1.75-.125c1.5-1.75 3.75-2.625 6-2.625s4.5 1 6 2.625c.25.25.625.375.875.375s.625-.125.875-.375c.5-.5.5-1.25.125-1.75C25.875 20 23 18.75 20 18.75Zm0 0"
    />
    <Path
    fill={props.color || COLORS.colorPriamry}
    stroke={props.color || COLORS.colorPriamry}
      d="M20 12.5c-4.625 0-9 1.875-12.25 5.25-.5.5-.5 1.25 0 1.75s1.25.5 1.75 0C12.25 16.625 16 15 20 15s7.75 1.625 10.5 4.5c.25.25.625.375.875.375s.625-.125.875-.375c.5-.5.5-1.25 0-1.75C29 14.375 24.625 12.5 20 12.5Zm0 0"
    />
    <Path
    fill={props.color || COLORS.colorPriamry}
    stroke={props.color || COLORS.colorPriamry}
      d="M36.625 13.375C32.25 8.75 26.375 6.25 20 6.25S7.75 8.75 3.375 13.375c-.5.5-.5 1.25 0 1.75s1.25.5 1.75 0C9 11 14.375 8.75 20 8.75S31 11 34.875 15.125c.25.25.625.375.875.375s.625-.125.875-.375c.5-.5.5-1.25 0-1.75Zm0 0"
    />
  </Svg>
)