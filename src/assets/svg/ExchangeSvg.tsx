import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../services/colors"

const ExchangeSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={37}
    viewBox="0 0 511.999 511.999"
    style={{
      enableBackground: "new 0 0 511.999 511.999",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
        fill={props.color || COLORS.colorPriamry}
        stroke={props.color || COLORS.colorPriamry}
    d="M500.519 255.999h-8.973c0-129.881-105.665-235.546-235.546-235.546-11.494 0-20.812 9.318-20.812 20.812 0 11.494 9.318 20.812 20.812 20.812 106.928 0 193.922 86.993 193.922 193.922h-8.971c-8.824 0-14.341 9.553-9.929 17.196l29.785 51.588c4.412 7.642 15.444 7.642 19.856 0l29.784-51.588c4.412-7.642-1.104-17.196-9.928-17.196zM256 449.921c-106.929 0-193.922-86.993-193.922-193.922h8.971c8.824 0 14.341-9.553 9.927-17.197l-29.784-51.588c-4.412-7.642-15.444-7.642-19.856 0l-29.783 51.59C-2.859 246.446 2.656 256 11.48 256h8.971c0 129.881 105.665 235.546 235.546 235.546 11.494 0 20.812-9.318 20.812-20.812.003-11.495-9.316-20.813-20.809-20.813zM253.158 235.23v-18.295c-11.205 2.241-15.031 11.966 0 18.295zM261.767 263.673v20.603c5.228-1.231 9.379-4.151 9.379-9.686.001-5.074-3.843-8.303-9.379-10.917z" />
    <Path 
        fill={props.color || COLORS.colorPriamry}
        stroke={props.color || COLORS.colorPriamry}
    d="M256 104.461c-83.559 0-151.538 67.98-151.538 151.538S172.441 407.537 256 407.537s151.538-67.98 151.538-151.538S339.558 104.461 256 104.461zm7.306 201.185v4.458c0 2.153-2.921 4.151-5.843 4.151-3.383 0-5.841-1.998-5.841-4.151v-3.843c-18.449-.615-33.517-10.148-33.517-19.987 0-5.228 4.613-12.915 10.455-12.915 6.457 0 11.685 9.071 23.063 11.071v-24.907c-14.144-5.381-30.749-11.992-30.749-31.672 0-19.526 14.452-28.904 30.749-31.21v-4.305c0-2.152 2.46-4.151 5.841-4.151 2.921 0 5.843 1.999 5.843 4.151v3.845c9.532.308 27.521 2.768 27.521 13.375 0 4.151-2.767 12.607-9.532 12.607-5.074 0-7.995-4.92-17.989-5.689v22.447c13.991 5.228 30.287 12.454 30.287 33.209-.001 19.064-12.299 30.595-30.288 33.516z" />
  </Svg>
)

export default ExchangeSvg
