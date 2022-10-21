import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../services/colors"

const LanguageSvg = (props) => (
  <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
        stroke={props.color || COLORS.colorPriamry}
      strokeWidth={2}
      d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0 0c3 0 4-5 4-11S15 1 12 1 8 6 8 12s1 11 4 11ZM2 16h20M2 8h20"
    />
  </Svg>
)

export default LanguageSvg