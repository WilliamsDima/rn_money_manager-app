import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const AccauntsSvg = (props: SvgProps) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20 13.75v-5a2.5 2.5 0 0 0-2.5-2.5H6.25a2.5 2.5 0 0 0-2.5 2.5V15a2.5 2.5 0 0 0 2.5 2.5H10"
      stroke={props.color || "#00B127"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M23.75 25H12.5a2.5 2.5 0 0 1-2.5-2.5v-6.25a2.5 2.5 0 0 1 2.5-2.5h11.25a2.5 2.5 0 0 1 2.5 2.5v6.25a2.5 2.5 0 0 1-2.5 2.5ZM20 10H3.75M10 17.5h16.25"
      stroke={props.color || "#00B127"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default AccauntsSvg
