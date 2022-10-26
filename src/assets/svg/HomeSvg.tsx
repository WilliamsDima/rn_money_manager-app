import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { COLORS } from "../../services/colors"

const HomeSvg = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 30 29"
    {...props}
  >
    <Path
                  fill={props.color || COLORS.colorPriamry}
                  stroke={props.color || COLORS.colorPriamry}
      d="M4.078 26.7s-.027.648.629.648l7.563-.008.011-5.992s-.105-.985.883-.985h3.14c1.173 0 1.098.985 1.098.985l-.011 5.972h7.402c.832 0 .793-.804.793-.804V15.469L15.152 6.496 4.078 15.47v11.23Zm0 0"
    />
    <Path
                  fill={props.color || COLORS.colorPriamry}
                  stroke={props.color || COLORS.colorPriamry}
      d="M0 14.633s.938 1.676 2.992 0L15.246 4.609l11.488 9.961c2.375 1.657 3.266 0 3.266 0L15.246 1.652ZM26.457 4.59h-2.953l.012 3.465 2.941 2.414Zm0 0"
    />
  </Svg>
)

export default HomeSvg
