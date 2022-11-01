import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const TiketSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 15.631 15.631"
    style={{
      enableBackground: "new 0 0 15.631 15.631",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
          stroke={props.color || '#fff'}
      d="M14.371 3.547a.935.935 0 0 1-.167.234c-.478.478-1.393.338-2.043-.312-.65-.65-.79-1.565-.312-2.043a.905.905 0 0 1 .233-.167L10.822 0 8.964 1.859l.465.465-.289.289-.465-.465-8.674 8.675 1.226 1.227c.479-.479 1.393-.34 2.043.311s.79 1.564.312 2.043l1.226 1.227L15.63 4.807l-1.259-1.26zm-3.804.491-.713-.713.288-.289.713.713-.288.289zm1.426 1.426-.713-.713.288-.288.714.713-.289.288zm1.427 1.427-.714-.713.289-.288.713.713-.288.288z"
    />
  </Svg>
)

// fill={props.color}
// stroke={props.color}