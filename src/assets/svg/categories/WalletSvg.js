import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const WalletSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 277.5 277.5"
    style={{
      enableBackground: "new 0 0 277.5 277.5",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
    fill={props.color}
stroke={props.color}
    d="M277.5 127.817h-7.083v-51.13h-32.346L165.946 4.563l-43.671 43.671-25.658-25.66-54.114 54.114H0v196.25h270.417v-78.87h7.083v-66.251zm-60.642-51.129H115.034l50.912-50.912 50.912 50.912zM96.617 43.787 111.67 58.84 93.821 76.688H63.716l32.901-32.901zm158.8 214.151H15V91.688h240.417v36.13H157.5v66.25h97.917v63.87zm7.083-78.871h-90v-36.25h90v36.25z" />
    <Path 
        fill={props.color}
        stroke={props.color}
    d="M183.333 153.442h20.833v15h-20.833z" />
  </Svg>
)

// fill={props.color}
// stroke={props.color}