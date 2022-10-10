import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { COLORS } from "../../services/colors"

const DeleteSvg = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 443 443"
    style={{
      enableBackground: "new 0 0 443 443",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
        strokeWidth={3}
        stroke={props.color || COLORS.colorRed}
        d="M321.785 38h-83.384V0H125.169v38H41.785v60h280V38zm-166.616-8h53.232v8h-53.232v-8zM295.142 214.31l5.66-86.31H62.769l19.016 290h114.172c-14.861-21.067-23.602-46.746-23.602-74.43 0-69.14 54.494-125.791 122.787-129.26z" />
    <Path
        strokeWidth={3}
        stroke={props.color || COLORS.colorRed}
        d="M301.785 244.141c-54.826 0-99.43 44.604-99.43 99.429S246.959 443 301.785 443s99.43-44.604 99.43-99.43-44.604-99.429-99.43-99.429zm54.176 132.392-21.213 21.213-32.963-32.963-32.963 32.963-21.213-21.213 32.963-32.963-32.963-32.963 21.213-21.213 32.963 32.963 32.963-32.963 21.213 21.213-32.963 32.963 32.963 32.963z" />
  </Svg>
)

export default DeleteSvg
