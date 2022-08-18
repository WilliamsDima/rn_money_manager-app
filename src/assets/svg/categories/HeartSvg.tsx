import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HeartSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 403.326 403.326"
    style={{
      enableBackground: "new 0 0 403.326 403.326",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
    fill={props.color || '#fff'}
    stroke={props.color || '#fff'}
    d="M368.158 53.06c-22.715-22.714-52.915-35.224-85.038-35.224-30.464 0-59.197 11.25-81.458 31.786C154.547 6.202 80.881 7.348 35.167 53.061c-46.89 46.89-46.89 123.185 0 170.075L194.592 382.56a10.003 10.003 0 0 0 14.142 0l159.424-159.424c46.89-46.89 46.89-123.185 0-170.076zm-14.142 155.934L201.663 361.347 49.31 208.993c-18.938-18.937-29.366-44.114-29.366-70.895.001-26.781 10.43-51.959 29.367-70.896 19.546-19.546 45.221-29.319 70.896-29.319 24.097 0 48.194 8.61 67.225 25.829L158.47 92.674c-3.905 3.905-3.905 10.237 0 14.142 1.953 1.953 4.512 2.929 7.071 2.929s5.118-.976 7.071-2.929l39.614-39.615c18.937-18.937 44.114-29.366 70.895-29.366s51.959 10.429 70.896 29.366c39.091 39.094 39.091 102.701-.001 141.793z" />
    <Path 
    fill={props.color || '#fff'}
    stroke={props.color || '#fff'}
    d="M312.596 54.129c-9.7-3.561-19.901-5.366-30.32-5.366-5.522 0-10 4.477-10 10s4.478 10 10 10c8.06 0 15.942 1.393 23.43 4.141 1.137.417 2.3.615 3.444.615 4.074 0 7.903-2.51 9.389-6.557 1.903-5.185-.758-10.93-5.943-12.833zM349.446 79.908c-3.569-4.214-9.881-4.736-14.094-1.166-4.214 3.57-4.736 9.88-1.166 14.094 10.376 12.247 16.09 27.847 16.09 43.927 0 5.523 4.478 10 10 10s10-4.477 10-10c0-20.808-7.398-40.999-20.83-56.855zM185.299 298.843c-3.906-3.905-10.236-3.905-14.143 0-3.905 3.905-3.905 10.237 0 14.143l13.998 13.998c1.953 1.953 4.512 2.929 7.071 2.929s5.118-.976 7.071-2.929c3.905-3.905 3.905-10.237 0-14.143l-13.997-13.998zM109.547 223.091c-3.906-3.905-10.236-3.905-14.143 0-3.905 3.905-3.905 10.237 0 14.143l52.751 52.751c1.953 1.953 4.512 2.929 7.071 2.929s5.118-.976 7.071-2.929c3.905-3.905 3.905-10.237 0-14.143l-52.75-52.751z" />
  </Svg>
)
export default HeartSvg
// fill={props.color}
// stroke={props.color}