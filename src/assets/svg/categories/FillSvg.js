import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const FillSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    style={{
      enableBackground: "new 0 0 32 32",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
    fill={props.color}
    stroke={props.color}
      d="M22 26.503v-6c0-.663 1-.663 1 0v6c0 .663-1 .663-1 0zm3-.006v-6c0-.663-1-.663-1 0v6c0 .662 1 .662 1 0zm-4 .006v-6c0-.663-1-.663-1 0v6c0 .663 1 .663 1 0z"
    />
    <Path
        fill={props.color}
        stroke={props.color}
      d="M20 7.5c0 .928-.758 1.68-1.694 1.68-.508 0-1.408-.221-2.126-.572-.362.538-.979.892-1.68.892s-1.318-.354-1.68-.892c-.718.351-1.619.572-2.126.572C9.758 9.18 9 8.428 9 7.5s.758-1.68 1.694-1.68c.508 0 1.408.221 2.126.572.362-.537.979-.892 1.68-.892s1.318.355 1.68.892c.718-.351 1.619-.572 2.126-.572.936 0 1.694.752 1.694 1.68zM19 12h-3v-1.897a3.031 3.031 0 0 1-3 0V12H8.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h10.02c.817 0 1.48.663 1.48 1.48v.02a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V18a6 6 0 0 0-6-6z"
    />
  </Svg>
)

// fill={props.color}
// stroke={props.color}