import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const InternetSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    viewBox="0 0 32 32"
    style={{
      enableBackground: "new 0 0 32 32",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path 
                fill={props.color || '#fff'}
                stroke={props.color || '#fff'}
    d="M16 20c-1.9 0-3.5 1.6-3.5 3.5S14.1 27 16 27s3.5-1.6 3.5-3.5S17.9 20 16 20zM16 15c-2.4 0-4.7 1-6.3 2.8-.4.4-.3 1 .1 1.4.4.4 1 .3 1.4-.1 1.2-1.4 3-2.1 4.8-2.1s3.6.8 4.8 2.1c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 .1-1.4C20.7 16 18.4 15 16 15z" />
    <Path
                fill={props.color || '#fff'}
                stroke={props.color || '#fff'}
     d="M16 10c-3.7 0-7.2 1.5-9.8 4.2-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0C9.8 13.3 12.8 12 16 12s6.2 1.3 8.4 3.6c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4-2.6-2.7-6.1-4.2-9.8-4.2z" />
    <Path 
                fill={props.color || '#fff'}
                stroke={props.color || '#fff'}
    d="M29.3 10.7C25.8 7 21.1 5 16 5S6.2 7 2.7 10.7c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0C7.2 8.8 11.5 7 16 7s8.8 1.8 11.9 5.1c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4z" />
  </Svg>
)