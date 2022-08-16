import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const HistorySvg = (props) => (
  <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      fill={props.color || '#fff'}
      stroke={props.color || '#fff'}
      d="M12 3a9 9 0 1 1-8.963 8.183 1 1 0 1 1 1.992.18A6.962 6.962 0 0 0 7.05 16.95c.375.375.792.707 1.242.988A7 7 0 1 0 7.098 7.002l1.4.001a1 1 0 0 1 .116 1.994l-.116.006H4.496a1 1 0 0 1-.993-.883l-.007-.117v-4a1 1 0 0 1 1.994-.116l.006.117v1.774A8.983 8.983 0 0 1 12 3Zm-.75 4a.75.75 0 0 1 .743.648L12 7.75V12h2.25a.75.75 0 0 1 .102 1.493l-.102.007h-3a.75.75 0 0 1-.743-.648l-.007-.102v-5a.75.75 0 0 1 .75-.75Z"
      fillRule="nonzero"
    />
  </Svg>
)


// fill={props.color}
// stroke={props.color}
// width={30}
// height={30}