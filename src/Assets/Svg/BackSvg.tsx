import * as React from "react"
import Svg, { Path } from "react-native-svg"

type Props = {
    color: string
    width: number | string
    height: number | string
}

function BackSvg(data: Props) {
    const {color,width,height,...props} = data
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <Path fill="#fff" fillOpacity={0.01} d="M0 0H48V48H0z" />
      <Path
        d="M31 36L19 24l12-12"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default BackSvg
