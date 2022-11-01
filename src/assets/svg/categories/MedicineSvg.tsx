import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const MedicineSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 401.73 401.73"
    style={{
      enableBackground: "new 0 0 401.73 401.73",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path  
    fill={props.color || '#fff'}
    stroke={props.color || '#fff'}
      d="M142.51 43.046V10c0-5.522 4.477-10 10-10h96.712c5.523 0 10 4.478 10 10v48.099c0 5.522-4.477 10-10 10s-10-4.478-10-10V20H162.51v23.046c0 5.522-4.477 10-10 10s-10-4.478-10-10zm0 212.506c0 5.522 4.477 10 10 10s10-4.478 10-10v-22.905c0-5.522-4.477-10-10-10H36.574v-76.712H152.51c5.523 0 10-4.478 10-10v-27.662c0-5.522-4.477-10-10-10s-10 4.478-10 10v17.662H26.574c-5.523 0-10 4.478-10 10v96.712c0 5.522 4.477 10 10 10H142.51v12.905zm106.712 44.601c-5.523 0-10 4.478-10 10v38.429H162.51v-18.95c0-5.522-4.477-10-10-10s-10 4.478-10 10v28.95c0 5.522 4.477 10 10 10h96.712c5.523 0 10-4.478 10-10v-48.429c0-5.522-4.477-10-10-10zm125.935-174.218h-56.705l-.019-23.801a10.001 10.001 0 0 0-8.248-9.838L123.848 59.137c-2.742-9.086-11.173-15.704-21.152-15.704-8.603 0-16.053 4.92-19.703 12.097h-4.685c-5.523 0-10 4.478-10 10s4.477 10 10 10h4.685c3.65 7.177 11.1 12.097 19.703 12.097 7.211 0 13.613-3.456 17.646-8.8l178.099 31.693.012 15.414h-39.23v-.248c0-5.522-4.477-10-10-10s-10 4.478-10 10v10.248c0 5.522 4.477 10 10 10h115.935v76.712H249.222c-5.523 0-10 4.478-10 10v14.051c0 5.522 4.477 10 10 10s10-4.478 10-10v-4.051h39.23l-.013 16.187-197.497 35.145a10.001 10.001 0 0 0-8.248 9.846v54.169l-15.368 29.062c-2.582 4.882-.717 10.933 4.165 13.515a9.957 9.957 0 0 0 4.666 1.162c3.587 0 7.055-1.936 8.849-5.327l16.528-31.255a9.995 9.995 0 0 0 1.16-4.675v-48.272l197.49-35.144a10.001 10.001 0 0 0 8.248-9.838l.02-24.573h56.704c5.523 0 10-4.478 10-10v-96.712c.001-5.524-4.476-10.001-9.999-10.001z"
    />
  </Svg>
)

// fill={'#fff'}
// stroke={'#fff'}

// width={props.width}
// height={props.height}