import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CardSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={37}
    viewBox="0 0 395 395"
    style={{
      enableBackground: "new 0 0 395 395",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
        fill={props.color || '#fff'}
        stroke={props.color || '#fff'}
     d="M0 77.551h395v55H0zM0 317.449h395V162.551H0v154.898zm248.521-85H340v30h-91.479v-30z" />
  </Svg>
)

export default CardSvg
