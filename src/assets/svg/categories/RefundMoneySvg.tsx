import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const RefundMoney = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 489.2 489.2"
    style={{
      enableBackground: "new 0 0 489.2 489.2",
    }}
    width={30}
    height={30}
    xmlSpace="preserve"
    {...props}
  >
    <Path
    fill={props.color || '#fff'}
    stroke={props.color || '#fff'}
    d="M481.044 382.5c0-6.8-5.5-12.3-12.3-12.3h-418.7l73.6-73.6c4.8-4.8 4.8-12.5 0-17.3-4.8-4.8-12.5-4.8-17.3 0l-94.5 94.5c-4.8 4.8-4.8 12.5 0 17.3l94.5 94.5c2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6c4.8-4.8 4.8-12.5 0-17.3l-73.6-73.6h418.8c6.6 0 12.1-5.4 12.1-12.2zM477.444 98l-94.5-94.4c-4.8-4.8-12.5-4.8-17.3 0s-4.8 12.5 0 17.3l73.6 73.6h-418.8c-6.8 0-12.3 5.5-12.3 12.3s5.5 12.3 12.3 12.3h418.8l-73.6 73.4c-4.8 4.8-4.8 12.5 0 17.3 2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6l94.5-94.5c4.7-4.7 4.7-12.5-.1-17.3z" />
  </Svg>
)

export default RefundMoney
