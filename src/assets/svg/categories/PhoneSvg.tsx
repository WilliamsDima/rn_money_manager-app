import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const PhoneSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={37}
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
    d="M103.656 466.086c0 19.803 15 35.914 33.438 35.914h227.813c18.438 0 33.438-16.111 33.438-35.914V35.914c0-19.803-15-35.914-33.438-35.914H137.094c-18.438 0-33.438 16.111-33.438 35.914v430.172zm20-388.039h254.688v302.37H123.656V78.047zm0-42.133c0-8.775 6.028-15.914 13.438-15.914h227.813c7.409 0 13.438 7.139 13.438 15.914v22.133H123.656V35.914zm254.688 430.172c0 8.775-6.028 15.914-13.438 15.914H137.094c-7.41 0-13.438-7.139-13.438-15.914v-65.669h254.688v65.669z" />
    <Path 
        fill={props.color || '#fff'}
        stroke={props.color || '#fff'}
    d="M251 468.83c15.517 0 28.14-12.623 28.14-28.14s-12.623-28.14-28.14-28.14c-15.516 0-28.14 12.623-28.14 28.14s12.624 28.14 28.14 28.14zm0-36.279c4.488 0 8.14 3.651 8.14 8.14s-3.651 8.14-8.14 8.14-8.14-3.651-8.14-8.14 3.652-8.14 8.14-8.14zM260.329 30.061h-18.658c-5.523 0-10 4.478-10 10s4.477 10 10 10h18.658c5.522 0 10-4.478 10-10s-4.477-10-10-10zM152.527 165.85c-5.523 0-10 4.478-10 10v176.215c0 5.522 4.477 10 10 10s10-4.478 10-10V175.85c0-5.523-4.477-10-10-10zM152.527 98.473c-5.523 0-10 4.478-10 10v26.951c0 5.522 4.477 10 10 10s10-4.478 10-10v-26.951c0-5.523-4.477-10-10-10z" />
  </Svg>
)

// fill={props.color}
// stroke={props.color}