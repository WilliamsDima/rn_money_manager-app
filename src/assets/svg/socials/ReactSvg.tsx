import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../../services/colors"

export const ReactSvg = (props) => (
  <Svg
    width={90}
    height={90}
    viewBox="0 -1.5 27 27"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path 
        fill={props.color || COLORS.mainColor}
        stroke={props.color || COLORS.mainColor}
        strokeMiterlimit={2}
        strokeWidth={0.3}
    d="M15.902 11.974a2.41 2.41 0 1 1-4.82 0 2.41 2.41 0 0 1 4.82 0z" />
    <Path 
        fill={props.color || COLORS.mainColor}
        stroke={props.color || COLORS.mainColor}
        strokeMiterlimit={2}
        strokeWidth={0.3}
    d="M13.491 17.494a27.278 27.278 0 0 1-8.749-1.206l.193.051a10.886 10.886 0 0 1-3.541-1.903l.021.016a3.414 3.414 0 0 1-1.41-2.467l-.001-.013c0-1.594 1.747-3.154 4.681-4.172 2.512-.827 5.403-1.304 8.405-1.304l.417.003h-.021a27.489 27.489 0 0 1 8.885 1.334l-.195-.055a11.058 11.058 0 0 1 3.433 1.814l-.024-.018a3.274 3.274 0 0 1 1.386 2.387l.001.013c0 1.656-1.954 3.332-5.103 4.374-2.363.729-5.08 1.149-7.895 1.149-.17 0-.339-.002-.508-.005h.025zm0-9.84c-.106-.002-.232-.002-.358-.002-2.881 0-5.656.452-8.259 1.289l.191-.053c-2.698.941-3.908 2.228-3.908 3.087 0 .893 1.301 2.3 4.153 3.274 2.249.697 4.834 1.099 7.513 1.099.235 0 .469-.003.702-.009l-.034.001a26.452 26.452 0 0 0 8.205-1.138l-.187.049c2.96-.984 4.32-2.391 4.32-3.28a2.247 2.247 0 0 0-.966-1.515l-.008-.005a9.806 9.806 0 0 0-2.97-1.574l-.07-.02c-2.368-.766-5.093-1.208-7.92-1.208-.142 0-.283.001-.424.003h.021z" />
    <Path 
        fill={props.color || COLORS.mainColor}
        stroke={props.color || COLORS.mainColor}
        strokeMiterlimit={2}
        strokeWidth={0.3}
    d="m8.023 23.986-.053.001c-.453 0-.878-.119-1.245-.327l.013.007c-1.378-.8-1.858-3.092-1.28-6.141.697-3.128 1.827-5.894 3.344-8.4l-.069.124a27.856 27.856 0 0 1 5.425-6.872l.02-.018A10.943 10.943 0 0 1 17.365.332l.073-.027c.407-.196.885-.31 1.39-.31.501 0 .976.113 1.4.314l-.02-.008c1.435.826 1.911 3.36 1.238 6.606-.72 2.967-1.818 5.58-3.262 7.959l.07-.123c-1.452 2.63-3.209 4.882-5.266 6.819l-.014.013a10.872 10.872 0 0 1-3.321 2.082l-.074.026c-.46.181-.992.292-1.549.305h-.006zM9.228 9.539l.499.288c-1.381 2.28-2.465 4.926-3.106 7.74l-.034.18c-.533 2.809-.019 4.498.72 4.926.191.102.417.161.657.161l.061-.001h-.003c.955 0 2.458-.605 4.196-2.122a26.398 26.398 0 0 0 4.972-6.404l.068-.135a26.071 26.071 0 0 0 3.025-7.307l.038-.182c.629-3.058.086-4.93-.686-5.378a2.246 2.246 0 0 0-1.814.092l.013-.006a9.858 9.858 0 0 0-2.907 1.846l.007-.006a26.608 26.608 0 0 0-5.136 6.468l-.069.132z" />
    <Path 
        fill={props.color || COLORS.mainColor}
        stroke={props.color || COLORS.mainColor}
        strokeMiterlimit={2}
        strokeWidth={0.3}
    d="M18.96 24c-1.306 0-2.96-.787-4.69-2.276a27.794 27.794 0 0 1-5.464-6.834l-.072-.137c-1.43-2.349-2.551-5.075-3.215-7.975l-.036-.185a10.75 10.75 0 0 1-.255-2.357c0-.527.037-1.044.108-1.551l-.007.058A3.271 3.271 0 0 1 6.701.344l.01-.007c1.43-.83 3.865.024 6.342 2.228a27.865 27.865 0 0 1 5.118 6.54l.072.138a26.769 26.769 0 0 1 3.242 7.798l.038.186c.163.709.257 1.524.257 2.36 0 .577-.044 1.143-.13 1.696l.008-.062a3.419 3.419 0 0 1-1.429 2.456l-.011.007a2.435 2.435 0 0 1-1.207.316l-.054-.001h.003zm-9.228-9.823a27.066 27.066 0 0 0 5.271 6.656l.02.018c2.166 1.863 3.884 2.266 4.628 1.834.773-.446 1.339-2.276.754-5.233-.702-2.89-1.787-5.434-3.219-7.741l.065.112a26.77 26.77 0 0 0-4.948-6.384l-.012-.011C9.957 1.354 8.066.888 7.293 1.334a2.234 2.234 0 0 0-.825 1.593v.007a9.854 9.854 0 0 0 .162 3.499l-.013-.066c.673 2.952 1.747 5.559 3.182 7.924l-.066-.117z" />
  </Svg>
)
