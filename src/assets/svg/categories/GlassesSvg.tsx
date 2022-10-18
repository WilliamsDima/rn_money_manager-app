import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../../services/colors"

export const GlassesSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={37}
    viewBox="0 0 489.6 489.6"
    style={{
      enableBackground: "new 0 0 489.6 489.6",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
    fill={props.color || COLORS.colorPriamry}
    stroke={props.color || COLORS.colorPriamry}
    d="M353.7 85.738c6.5-2 13.5-1.3 19.5 1.9s10.4 8.6 12.4 15.1v.2l43 136.4c-13-5.9-27.5-9.2-42.7-9.2-52 0-95.1 38.4-102.5 88.4H206c-8.2-49-50.9-86.5-102.3-86.5-15.3 0-29.8 3.3-42.8 9.3l43.5-138.3v-.2c4.1-13.5 18.4-21.1 31.9-17 9.1 2.7 18.6-2.4 21.4-11.4 2.8-9.1-2.4-18.6-11.4-21.4-31.5-9.6-64.9 8.2-74.6 39.6v.2l-63.8 202.6c-.2.6-.3 1.2-.5 1.8-4.8 11.9-7.4 24.9-7.4 38.4 0 57.2 46.5 103.7 103.7 103.7 51.3 0 94.1-37.5 102.3-86.5h78c8.9 48.1 51.2 84.7 101.9 84.7 57.2 0 103.7-46.5 103.7-103.7 0-13.7-2.7-26.7-7.5-38.7l-63.8-202.5v-.1c-4.7-15.2-15-27.7-29-35.2-14.1-7.5-30.3-9.1-45.6-4.5-9.1 2.8-14.2 12.3-11.4 21.4 2.7 9.2 12.3 14.3 21.4 11.5zm-250 319.3c-38.3 0-69.4-31.1-69.4-69.4s31.1-69.4 69.4-69.4 69.4 31.1 69.4 69.4-31.1 69.4-69.4 69.4zm282.2-1.8c-38.3 0-69.4-31.1-69.4-69.4s31.1-69.4 69.4-69.4 69.4 31.1 69.4 69.4-31.2 69.4-69.4 69.4z" />
  </Svg>
)

// fill={props.color}
// stroke={props.color}