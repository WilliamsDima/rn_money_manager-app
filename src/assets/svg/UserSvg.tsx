import * as React from "react"
import Svg, { Path, Ellipse } from "react-native-svg"
import { COLORS } from "../../services/colors"

const UserSvg = (props) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={37}
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
        fill={props.color || COLORS.colorPriamry}
        stroke={props.color || COLORS.colorPriamry}
    d="M333.187 237.405c32.761-23.893 54.095-62.561 54.095-106.123C387.282 58.893 328.389 0 256 0S124.718 58.893 124.718 131.282c0 43.562 21.333 82.23 54.095 106.123-81.44 31.165-139.428 110.126-139.428 202.39 0 39.814 32.391 72.205 72.205 72.205h288.82c39.814 0 72.205-32.391 72.205-72.205 0-92.264-57.988-171.225-139.428-202.39zM164.103 131.282c0-50.672 41.225-91.897 91.897-91.897s91.897 41.225 91.897 91.897S306.672 223.18 256 223.18s-91.897-41.226-91.897-91.898zM400.41 472.615H111.59c-18.097 0-32.82-14.723-32.82-32.821 0-97.726 79.504-177.231 177.231-177.231s177.231 79.504 177.231 177.231c-.001 18.098-14.724 32.821-32.822 32.821z" />
  </Svg>
)

export default UserSvg