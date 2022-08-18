import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const MusicSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path 

    fill={props.color}
    stroke={props.color}
    d="M511.969 352.552V24.827a10.197 10.197 0 0 0-11.595-10.102L193.287 57.2a10.198 10.198 0 0 0-8.801 10.102V347.74h-.001c-9.587-9.42-22.137-16.43-36.986-20.402-24.023-6.426-51.314-4.141-76.848 6.436-25.533 10.576-46.447 28.258-58.89 49.789-12.95 22.409-15.293 46.311-6.597 67.305 8.696 20.993 27.254 36.238 52.257 42.927 8.941 2.391 18.334 3.576 27.921 3.576 16.172 0 32.897-3.372 48.927-10.012 25.533-10.576 46.447-28.258 58.89-49.789 8.215-14.216 12.155-29.031 11.723-43.324V149.131l286.691-39.654v196.562c-9.587-9.42-22.137-16.43-36.986-20.402-24.023-6.426-51.314-4.14-76.848 6.436-25.533 10.576-46.447 28.258-58.89 49.789-12.95 22.409-15.294 46.311-6.598 67.304 8.696 20.992 27.255 36.238 52.257 42.926 8.941 2.391 18.335 3.576 27.922 3.576 16.172 0 32.896-3.372 48.926-10.012 25.533-10.576 46.447-28.258 58.89-49.79 8.212-14.212 12.152-29.024 11.723-43.314zM126.463 468.515c-21.411 8.869-44.059 10.849-63.772 5.576-18.733-5.011-32.472-16.031-38.684-31.028-6.213-14.998-4.29-32.504 5.413-49.294 10.21-17.668 27.625-32.282 49.036-41.151 13.88-5.75 28.036-8.478 41.301-8.478 28.08 0 52.166 12.23 61.154 33.93 13.237 31.953-11.189 72.526-54.448 90.445zM491.572 88.886 204.881 128.54V76.187l286.691-39.654v52.353zm-8.985 296.775c-10.21 17.668-27.625 32.282-49.036 41.151-43.26 17.918-89.221 6.5-102.456-25.453-13.236-31.953 11.191-72.527 54.45-90.445 13.556-5.615 27.606-8.468 41.095-8.468 7.817 0 15.445.959 22.677 2.893 18.733 5.011 32.472 16.031 38.684 31.029 6.21 14.997 4.288 32.503-5.414 49.293z" />
    <Path 
    fill={props.color}
    stroke={props.color}
    d="M481.279 58.808c-.771-5.579-5.925-9.475-11.499-8.705l-18.356 2.539c-5.579.772-9.477 5.92-8.705 11.499.706 5.105 5.076 8.802 10.089 8.802.465 0 .936-.033 1.41-.097l18.356-2.539c5.58-.772 9.477-5.92 8.705-11.499zM427.231 66.285c-.772-5.579-5.923-9.473-11.499-8.705L227.073 83.674c-5.579.772-9.477 5.92-8.705 11.499.706 5.105 5.076 8.802 10.089 8.802.465 0 .937-.033 1.41-.097l188.659-26.094c5.579-.772 9.477-5.92 8.705-11.499z" />
  </Svg>
)

// fill={props.color}
// stroke={props.color}