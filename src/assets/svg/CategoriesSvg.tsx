import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const CategoriesSvg = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3 5.5h3.07M10.324 3.732a2.5 2.5 0 1 1-3.536 3.536 2.5 2.5 0 0 1 3.536-3.536M11.06 5.5H21"
      stroke={props.color || "#0E0C0B"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.324 3.732a2.5 2.5 0 1 1-3.536 3.536 2.5 2.5 0 0 1 3.536-3.536M21 12h-3.06M12.94 12H3M17.212 10.232a2.5 2.5 0 1 1-3.536 3.536 2.5 2.5 0 0 1 3.536-3.536ZM11.06 18.5H21M3 18.5h3.06M10.324 16.732a2.5 2.5 0 1 1-3.536 3.536 2.5 2.5 0 0 1 3.536-3.536Z"
      stroke={props.color || "#0E0C0B"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default CategoriesSvg
