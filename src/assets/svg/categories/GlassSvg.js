import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const GlassSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 213.138 213.138"
    style={{
      enableBackground: "new 0 0 213.138 213.138",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
    fill={props.color}
    stroke={props.color}
    d="m42.848 46.449.016.018 56.205 66.601v85.07H70.163a7.499 7.499 0 0 0-7.5 7.5c0 4.143 3.357 7.5 7.5 7.5h72.812c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-28.906v-85.07l56.209-66.604.01-.011 28.789-34.115a7.496 7.496 0 0 0 1.07-7.997A7.498 7.498 0 0 0 193.346 0H19.792a7.499 7.499 0 0 0-5.731 12.337l28.787 34.112zm63.721 52.248L64.786 49.186h83.566l-41.783 49.511zM177.202 15l-16.189 19.186H52.127L35.936 15h141.266z" />
  </Svg>
)

// fill={props.color}
// stroke={props.color}