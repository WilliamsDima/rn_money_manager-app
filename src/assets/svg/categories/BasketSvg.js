import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const BasketSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192.617 192.617"
    style={{
      enableBackground: "new 0 0 192.617 192.617",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
      fill={props.color}
      stroke={props.color}
      d="M53.84 147.5a3.207 3.207 0 0 0 3.21-3.21V94.543a3.207 3.207 0 0 0-3.21-3.21 3.21 3.21 0 0 0-3.214 3.21v49.742a3.214 3.214 0 0 0 3.214 3.215zM82.221 147.5a3.206 3.206 0 0 0 3.214-3.21V94.543a3.206 3.206 0 0 0-3.214-3.21 3.212 3.212 0 0 0-3.21 3.21v49.742a3.21 3.21 0 0 0 3.21 3.215zM110.272 147.5a3.21 3.21 0 0 0 3.21-3.21V94.543a3.21 3.21 0 0 0-3.21-3.21 3.205 3.205 0 0 0-3.21 3.21v49.742a3.205 3.205 0 0 0 3.21 3.215zM137.986 147.5a3.203 3.203 0 0 0 3.21-3.21V94.543a3.203 3.203 0 0 0-3.21-3.21 3.212 3.212 0 0 0-3.21 3.21v49.742a3.208 3.208 0 0 0 3.21 3.215z"
    />
    <Path
      fill={props.color}
      stroke={props.color}
      d="M192.617 51.594h-14.809l10.307-10.304c2.444-2.459 2.444-6.435 0-8.872l-7.963-7.959c-2.366-2.369-6.488-2.369-8.872 0l-27.131 27.135H49.184L22.049 24.459c-2.38-2.369-6.488-2.369-8.879 0l-7.941 7.949a6.29 6.29 0 0 0-.004 8.879L15.536 51.59H0v30.477h13.585l18.735 87.868H154.9l24.086-87.868h13.632c-.001.001-.001-30.473-.001-30.473zM150 163.515H37.517L20.188 82.239h152.101L150 163.515zm36.19-87.868H6.428V58.018h24.615L9.77 36.953l7.741-7.949 29.017 29.01h100.279l28.813-29.01 7.949 7.737-21.276 21.276h23.9v17.629h-.003z"
    />
  </Svg>
)

// fill={props.color}
// stroke={props.color}