import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
import { COLORS } from "../../services/colors"

export const SettingSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 460 460"
    style={{
      enableBackground: "new 0 0 460 460",
    }}
    width={30}
    height={30}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
        fill={props.color || COLORS.mainColor}
        stroke={props.color || COLORS.mainColor}
    d="M72.878 167.167c0-52.638 42.869-95.295 95.295-95.295 50.775 0 92.476 39.965 95.156 90.158 7.497-7.38 17.774-11.943 29.1-11.943h42.911v-16.94c0-6.357-5.153-11.509-11.509-11.509H296.44a134.976 134.976 0 0 0-5.376-12.975l19.369-19.369c4.495-4.495 4.495-11.782 0-16.277l-48.111-48.111c-4.495-4.495-11.782-4.495-16.276 0l-19.369 19.369a135.339 135.339 0 0 0-12.975-5.376v-27.39C213.702 5.153 208.549 0 202.193 0h-68.039c-6.356 0-11.509 5.153-11.509 11.509V38.9a135.082 135.082 0 0 0-12.975 5.376L90.3 24.907c-4.495-4.495-11.782-4.495-16.276 0l-48.111 48.11c-4.495 4.495-4.495 11.782 0 16.277l19.369 19.369a135.232 135.232 0 0 0-5.376 12.975h-27.39c-6.356 0-11.509 5.153-11.509 11.509v68.038c0 6.356 5.153 11.509 11.509 11.509h27.391a135.082 135.082 0 0 0 5.376 12.975l-19.37 19.371c-4.495 4.495-4.495 11.782 0 16.276l48.111 48.111c4.495 4.495 11.782 4.495 16.276 0l19.369-19.369c4.21 2.008 8.54 3.801 12.975 5.376v27.391c0 6.356 5.153 11.509 11.509 11.509h14.927v-40.898c0-12.376 5.452-23.494 14.071-31.106-50.287-2.625-90.273-44.396-90.273-95.163z" />
    <Path 
        fill={props.color || COLORS.mainColor}
        stroke={props.color || COLORS.mainColor}
    d="M217.675 181.051c4.491-4.491 9.832-7.82 15.657-9.849 2.315-37.926-27.809-69.331-65.159-69.331-36.061 0-65.295 29.234-65.295 65.295 0 36.909 30.668 66.782 68.05 65.225 4.079-10.032 5.966-10.559 46.747-51.34zM447.484 281.926h-18.896a115.245 115.245 0 0 0-5.134-12.393l13.361-13.361c4.495-4.495 4.495-11.782 0-16.277l-37.63-37.63c-2.247-2.247-5.193-3.371-8.138-3.371s-5.891 1.124-8.138 3.371l-13.361 13.361a115.176 115.176 0 0 0-12.394-5.134v-18.896c0-6.356-5.153-11.509-11.509-11.509h-53.217c-6.356 0-11.509 5.153-11.509 11.509v18.896a115.141 115.141 0 0 0-12.394 5.134l-13.361-13.361a11.474 11.474 0 0 0-8.138-3.371 11.474 11.474 0 0 0-8.138 3.371l-37.63 37.63c-4.495 4.495-4.495 11.782 0 16.277l13.361 13.361a115.245 115.245 0 0 0-5.134 12.393H190.59c-6.356 0-11.509 5.153-11.509 11.509v53.217c0 6.356 5.153 11.509 11.509 11.509h18.896a115.041 115.041 0 0 0 5.134 12.393l-13.361 13.361c-4.495 4.495-4.495 11.782 0 16.277l37.63 37.63a11.474 11.474 0 0 0 8.138 3.371c2.945 0 5.891-1.124 8.138-3.371l13.361-13.361a115.176 115.176 0 0 0 12.394 5.134v18.896c0 6.357 5.153 11.509 11.509 11.509h53.217c6.356 0 11.509-5.153 11.509-11.509v-18.895a115.26 115.26 0 0 0 12.394-5.134l13.361 13.361c2.247 2.247 5.193 3.371 8.138 3.371s5.891-1.124 8.138-3.371l37.63-37.63c4.495-4.495 4.495-11.782 0-16.277l-13.361-13.361a115.45 115.45 0 0 0 5.134-12.393h18.896c6.356 0 11.509-5.153 11.509-11.509v-53.217c-.001-6.357-5.154-11.51-11.51-11.51zM319.037 404.71c-46.685 0-84.667-37.981-84.667-84.667s37.981-84.667 84.667-84.667c46.685 0 84.667 37.981 84.667 84.667s-37.982 84.667-84.667 84.667z" />
    <Circle cx={319.037} cy={320.044} r={54.667} />
  </Svg>
)