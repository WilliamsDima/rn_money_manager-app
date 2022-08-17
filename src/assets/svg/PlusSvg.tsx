import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const PlusSvg = (props) => {
    return <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} {...props}>
        <Path 
            fill="none"
            stroke={props.color || 'gold'}
            strokeMiterlimit={10}
            strokeWidth={2}
            scale={1}
            d="M25 2C12.317 2 2 12.317 2 25s10.317 23 23 23 23-10.317 23-23S37.683 2 25 2zm12 24H26v11h-2V26H13v-2h11V13h2v11h11v2z" />
      </Svg>
};