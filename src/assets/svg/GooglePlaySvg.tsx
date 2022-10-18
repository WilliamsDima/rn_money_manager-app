import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../services/colors"

const GooglePlaySvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 505.499 505.499"
    style={{
      enableBackground: "new 0 0 505.499 505.499",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
    fill={props.color || COLORS.colorPriamry}
    stroke={props.color || COLORS.colorPriamry}
    d="m471.497 234.466-92.082-53.135-75.733 73.207 69.215 66.907 98.599-56.91c5.432-3.133 8.678-8.756 8.678-15.03.001-6.275-3.245-11.898-8.677-15.039zM363.785 172.301l-101.332-58.498L40.375 0l250.828 242.471zM44.063 505.499l218.771-120.511 94.434-54.515-66.065-63.869zM25.559 9.815l-.235 489.671 253.397-244.953z" />
  </Svg>
)

export default GooglePlaySvg