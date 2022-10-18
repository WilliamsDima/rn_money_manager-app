import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../../services/colors"

export const BankSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={37}
    viewBox="0 0 512.001 512.001"
    style={{
      enableBackground: "new 0 0 512.001 512.001",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path 

    fill={props.color || COLORS.colorPriamry}
    stroke={props.color || COLORS.colorPriamry}
    d="M256 68.897c-22.497 0-40.799 18.302-40.799 40.8 0 22.497 18.302 40.799 40.799 40.799s40.8-18.302 40.8-40.799-18.303-40.8-40.8-40.8zm0 65.499c-13.618 0-24.699-11.08-24.699-24.699 0-13.619 11.081-24.7 24.699-24.7 13.619 0 24.7 11.08 24.7 24.7 0 13.619-11.08 24.699-24.7 24.699z" />
    <Path 
    fill={props.color || COLORS.colorPriamry}
    stroke={props.color || COLORS.colorPriamry}
    d="M503.929 436.548h-4.233c-3.181-16.094-15.708-28.862-31.67-32.406v-34.465a8.05 8.05 0 0 0-8.05-8.05h-4.244V228.308h4.244a8.05 8.05 0 0 0 8.05-8.05v-22.739h24.767c8.594 0 15.784-5.306 18.315-13.52 2.532-8.213-.422-16.647-7.524-21.487L305.966 27.875C291.175 17.798 273.898 12.471 256 12.471s-35.174 5.327-49.966 15.404L8.418 162.513C1.315 167.353-1.638 175.787.893 184c2.532 8.213 9.722 13.52 18.316 13.52h24.767v22.739a8.05 8.05 0 0 0 8.05 8.05h4.244v133.319h-4.244a8.05 8.05 0 0 0-8.05 8.05v34.464c-15.963 3.544-28.489 16.312-31.67 32.406H8.073a8.05 8.05 0 0 0-8.05 8.05v46.882a8.05 8.05 0 0 0 8.05 8.05h495.856a8.05 8.05 0 0 0 8.05-8.05v-46.882a8.05 8.05 0 0 0-8.05-8.05zM52.027 181.421v-.001H19.21c-1.97 0-2.682-1.356-2.931-2.164-.249-.808-.424-2.329 1.204-3.438L215.101 41.18a72.355 72.355 0 0 1 40.901-12.609c14.65 0 28.794 4.361 40.901 12.609l197.616 134.639c1.628 1.109 1.453 2.63 1.204 3.438s-.962 2.164-2.93 2.164H52.027zm344.16 30.787h-4.244v-14.689h59.982v14.689h-55.738zm43.445 16.1v133.319h-35.396V228.308h35.396zm-47.688 149.418h59.982v25.422h-59.982v-25.422zm-42.592-16.099h-4.244V228.308h4.244a8.05 8.05 0 0 0 8.05-8.05v-22.739h18.443v22.739a8.05 8.05 0 0 0 8.05 8.05h4.244v133.319h-4.244a8.05 8.05 0 0 0-8.05 8.05v33.472h-18.443v-33.472a8.05 8.05 0 0 0-8.05-8.05zm-63.788-149.419h-4.244v-14.689h59.981v14.689h-55.737zm43.445 16.1v133.319h-35.394V228.308h35.394zm-47.687 149.418h59.981v25.422h-59.981v-25.422zm-42.592-16.099h-4.244V228.308h4.244a8.05 8.05 0 0 0 8.05-8.05v-22.739h18.443v22.739a8.05 8.05 0 0 0 8.05 8.05h4.244v133.319h-4.244a8.05 8.05 0 0 0-8.05 8.05v33.472H246.78v-33.472a8.051 8.051 0 0 0-8.05-8.05zm-63.788-149.419h-4.244v-14.689h59.982v14.689h-55.738zm43.445 16.1v133.319h-35.396V228.308h35.396zm-47.688 149.418h59.982v25.422h-59.982v-25.422zm-42.592-16.099h-4.244V228.308h4.244a8.05 8.05 0 0 0 8.05-8.05v-22.739H154.6v22.739a8.05 8.05 0 0 0 8.05 8.05h4.244v133.319h-4.244a8.05 8.05 0 0 0-8.05 8.05v33.472h-18.443v-33.472a8.05 8.05 0 0 0-8.05-8.05zM64.319 212.208h-4.244v-14.689h59.981v14.689H64.319zm43.444 16.1v133.319H72.369V228.308h35.394zM60.076 377.726h59.981v25.422H60.076v-25.422zm-7.112 41.522H459.037c11.165 0 20.667 7.257 24.039 17.3H28.925c3.371-10.043 12.874-17.3 24.039-17.3zM495.88 483.43H16.122v-30.782H495.88v30.782z" />
  </Svg>
)

// fill={props.color}
// stroke={props.color}