import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HomeSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 502 502"
    style={{
      enableBackground: "new 0 0 502 502",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
            fill={props.color || '#fff'}
            stroke={props.color || '#fff'}
    d="M455.058 199.915 258.071 2.929c-3.905-3.905-10.237-3.905-14.143 0L46.943 199.915a10 10 0 0 0 7.072 17.071H76.73V492c0 5.523 4.477 10 10 10H415.271c5.523 0 10-4.477 10-10V216.987h22.715a10.002 10.002 0 0 0 7.072-17.072zM251 24.142l172.844 172.844H78.156L251 24.142zM216.294 482V356.582h69.413V482h-69.413zm188.977 0h-99.564V346.582c0-5.523-4.477-10-10-10h-89.413c-5.523 0-10 4.477-10 10V482H96.729V216.987h308.542V482z" />
    <Path 
            fill={props.color || '#fff'}
            stroke={props.color || '#fff'}
    d="M125.198 254.693h196.501c5.523 0 10-4.477 10-10s-4.477-10-10-10H125.198c-5.523 0-10 4.477-10 10s4.477 10 10 10zM358.088 254.693h18.714c5.523 0 10-4.477 10-10s-4.477-10-10-10h-18.714c-5.523 0-10 4.477-10 10s4.477 10 10 10zM235.405 396.885c-5.523 0-10 4.477-10 10v15.595c0 5.523 4.477 10 10 10s10-4.477 10-10v-15.595c0-5.523-4.477-10-10-10z" />
  </Svg>
)

export default HomeSvg
