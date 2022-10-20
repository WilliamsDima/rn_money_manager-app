import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../services/colors"

const PasswordSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 203.096 203.096"
    style={{
      enableBackground: "new 0 0 203.096 203.096",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
            fill={props.color || COLORS.colorPriamry}
            stroke={props.color || COLORS.colorPriamry}
    d="M153.976 73.236h-3.308V49.115C150.669 22.033 128.634 0 101.549 0 74.465 0 52.43 22.033 52.43 49.115v24.121h-3.31c-9.649 0-17.5 7.851-17.5 17.5v94.859c0 9.649 7.851 17.5 17.5 17.5h104.856c9.649 0 17.5-7.851 17.5-17.5V90.736c0-9.649-7.85-17.5-17.5-17.5zM67.43 49.115C67.43 30.304 82.736 15 101.549 15c18.813 0 34.119 15.304 34.119 34.115v24.121H67.43V49.115zm89.046 136.481c0 1.355-1.145 2.5-2.5 2.5H49.12c-1.355 0-2.5-1.145-2.5-2.5v-94.86c0-1.355 1.145-2.5 2.5-2.5h104.856c1.355 0 2.5 1.145 2.5 2.5v94.86z" />
    <Path 
            fill={props.color || COLORS.colorPriamry}
            stroke={props.color || COLORS.colorPriamry}
    d="M101.547 116.309a7.5 7.5 0 0 0-7.5 7.5v28.715a7.5 7.5 0 0 0 7.5 7.5 7.5 7.5 0 0 0 7.5-7.5v-28.715a7.5 7.5 0 0 0-7.5-7.5z" />
  </Svg>
)

export default PasswordSvg
