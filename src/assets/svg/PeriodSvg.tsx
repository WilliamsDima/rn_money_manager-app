import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../services/colors"

const PeriodSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
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
    d="M422.268 21.113v-2.639C422.268 8.288 413.98 0 403.794 0H382.68c-10.186 0-18.474 8.288-18.474 18.474v2.639h-79.175v-2.639C285.031 8.288 276.743 0 266.557 0h-21.113c-10.186 0-18.474 8.288-18.474 18.474v2.639h-79.175v-2.639C147.794 8.288 139.506 0 129.32 0h-21.113C98.02 0 89.732 8.288 89.732 18.474v2.639H0V512h512V21.113h-89.732zm-42.227-2.639c0-1.43 1.209-2.639 2.639-2.639h21.113c1.43 0 2.639 1.209 2.639 2.639V63.34H380.04V18.474zm-137.237 0c0-1.43 1.209-2.639 2.639-2.639h21.113c1.43 0 2.639 1.209 2.639 2.639V63.34h-26.392V18.474zm-137.237 0c0-1.43 1.209-2.639 2.639-2.639h21.113c1.43 0 2.639 1.209 2.639 2.639V63.34h-26.392V18.474zm390.598 477.691H15.835V163.629h480.33v332.536zm0-348.371H15.835v-26.392h424.907v-15.835H15.835V36.948h73.897v42.227h58.062V36.948h79.175v42.227h58.062V36.948h79.175v42.227h58.062V36.948h73.897v110.846z" />
    <Path 
        fill={props.color || COLORS.colorPriamry}
        stroke={props.color || COLORS.colorPriamry}
    d="M248.082 184.742v68.619H36.948v221.691h332.536v-63.34h105.567v-226.97H248.082zm-18.79 84.454-26.075 16.949-26.075-16.949h52.15zm0 52.783h-52.15l26.075-16.949 26.075 16.949zm-70.941-46.111 30.339 19.72-30.339 19.72v-39.44zM52.784 417.778l29.477 17.686-29.477 17.687v-35.373zm20.666-6.067h48.398l-24.199 14.52-24.199-14.52zm0 47.505 24.199-14.52 24.199 14.52H73.45zm69.065-6.066-29.477-17.686 29.477-17.687v35.373zm0-57.274H52.784v-58.062h89.732v58.062zm0-73.897H52.784v-52.784h89.732v52.784zm105.567 137.237H158.35v-47.505h89.732v47.505zm0-63.34H158.35v-58.062h89.732v58.062zm0-80.568-30.339-19.72 30.339-19.72v39.44zm86.777-114.731-26.075 16.949-26.075-16.949h52.15zm-26.075 159.011-29.031-21.773h58.062l-29.031 21.773zm.014 19.33 26.074 16.958h-52.164l26.09-16.958zm-26.09-56.939 26.075-16.949 26.075 16.949h-52.15zm0-52.783h52.15l-26.075 16.949-26.075-16.949zm0-15.835 26.075-16.949 26.075 16.949h-52.15zm-18.79-46.112 30.339 19.72-30.339 19.72v-39.44zm0 68.619 30.339 19.72-30.339 19.72v-39.44zm0 69.864 31.051 23.289-31.051 20.183v-43.472zm89.731 113.484h-89.732v-47.505h89.732v47.505zm0-70.012-31.051-20.183 31.051-23.289v43.472zm0-73.896-30.339-19.72 30.339-19.72v39.44zm0-68.619-30.339-19.72 30.339-19.72v39.44zm86.777-46.112-26.075 16.949-26.075-16.949h52.15zm0 52.784h-52.15l26.075-16.949 26.075 16.949zm-70.941-46.112 30.339 19.72-30.339 19.72v-39.44zm89.731 188.627h-89.732v-58.062h89.732v58.062zm0-73.897h-89.732v-52.784h89.732v52.784zm0-75.29-30.339-19.72 30.339-19.72v39.44z" />
  </Svg>
)

export default PeriodSvg
