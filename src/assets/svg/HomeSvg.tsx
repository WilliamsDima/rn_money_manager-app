import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const HomeSvg = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4 8.6V21h16V8.6"
      stroke={props.color || "#000"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m2 10 10-7 10 7M15 21v-6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6"
      stroke={props.color || "#000"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default HomeSvg
