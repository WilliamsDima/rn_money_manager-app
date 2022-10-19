import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../../services/colors"

export const GiftSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={37}
    viewBox="0 0 211.107 211.107"
    style={{
      enableBackground: "new 0 0 211.107 211.107",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
        fill={props.color || COLORS.colorPriamry}
        stroke={props.color || COLORS.colorPriamry}
    d="M197.051 61.905h-51.7c2.009-1.739 3.769-3.683 5.161-5.866 4.772-7.488 5.526-15.397 2.069-21.7-3.167-5.773-9.414-9.219-16.711-9.219-4.466 0-9.196 1.305-13.678 3.774-2.027 1.117-3.93 2.468-5.715 3.978 4.707-12.347 14.602-18.871 14.847-19.031a7.5 7.5 0 0 0-7.981-12.701c-.693.433-17.032 10.843-22.551 31.539a151.836 151.836 0 0 0-2.328 10.163C94.586 37.34 89.72 32.145 83.82 28.894c-4.482-2.469-9.211-3.774-13.677-3.774-7.298 0-13.545 3.446-16.711 9.219-3.457 6.303-2.703 14.212 2.068 21.7 1.391 2.183 3.152 4.128 5.161 5.866H14.056a7.5 7.5 0 0 0-7.5 7.5v28.467a7.5 7.5 0 0 0 7.5 7.5h5.299v98.234a7.5 7.5 0 0 0 7.5 7.5h157.397a7.5 7.5 0 0 0 7.5-7.5v-98.234h5.299a7.5 7.5 0 0 0 7.5-7.5V69.405a7.5 7.5 0 0 0-7.5-7.5zm-67.62-19.873c2.868-1.581 5.084-1.912 6.438-1.912 1.737 0 3.068.536 3.56 1.433.539.983.452 3.255-1.567 6.424-3.414 5.357-13.222 9.05-22.616 11.15 3.472-6.674 8.383-13.898 14.185-17.095zm-62.848-.479c.492-.897 1.823-1.433 3.56-1.433 1.354 0 3.57.332 6.438 1.912 5.802 3.197 10.713 10.421 14.185 17.095-9.394-2.1-19.202-5.792-22.616-11.149-2.02-3.17-2.107-5.442-1.567-6.425zM21.556 76.905h167.995v13.467H21.556V76.905z" />
  </Svg>
)

// fill={props.color}
// stroke={props.color}