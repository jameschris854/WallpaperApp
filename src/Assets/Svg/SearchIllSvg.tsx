import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
import colors from "../../constants/colors"

type Props = {
    size: string | number
    Colors: typeof colors
}

const SearchIllSvg = ({size,Colors,...props}: Props) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 423.662 423.662"
    style={{
      enableBackground: "new 0 0 423.662 423.662",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
      style={{
        fill: Colors.backgroundColorLight,
      }}
      d="m274.255 259.401 21.51 21.51c-3.21 1.39-6.22 3.39-8.84 6.01s-4.63 5.63-6.01 8.84l-21.51-21.5c2.62-2.29 5.18-4.69 7.67-7.18 2.5-2.5 4.89-5.06 7.18-7.68z"
    />
    <Path
      style={{
        opacity:0.6,
        fill: Colors.backgroundColorDark,
      }}
      d="M415.315 415.321c-11.13 11.12-29.17 11.12-40.3 0l-88.09-88.09c-8.51-8.51-10.51-21.06-6.01-31.47 1.38-3.21 3.39-6.22 6.01-8.84a28.484 28.484 0 0 1 40.3 0l88.09 88.09c11.13 11.13 11.13 29.18 0 40.31z"
    />
    <Path
      style={{
        fill: Colors.backgroundColorLight,
      }}
      d="M289.915 156.421c0 21.88-5.26 42.53-14.59 60.75l-60.16-72.71-70.4 82.94-48.81-58.98-50.93 61.57h-.01c-13.96-21.09-22.09-46.38-22.09-73.57 0-73.73 59.77-133.49 133.5-133.49 73.72 0 133.49 59.76 133.49 133.49zm-154.67-62.5c0-11.41-9.25-20.65-20.65-20.65-11.41 0-20.65 9.24-20.65 20.65 0 11.4 9.24 20.65 20.65 20.65 11.4 0 20.65-9.25 20.65-20.65z"
    />
    <Path
      style={{
        opacity:0.4,
        fill: Colors.backgroundColorLight,
      }}
      d="m144.765 227.401 70.4-82.94 60.16 72.71c-22.11 43.19-67.06 72.74-118.9 72.74-19.52 0-38.06-4.19-54.77-11.72l43.11-50.79z"
    />
    <Path
      style={{
        opacity: 0.51,
        fill: Colors.backgroundColorLight,
        enableBackground: "new",
      }}
      d="M266.895 156.421c0 4.14-3.36 7.5-7.5 7.5-4.15 0-7.5-3.36-7.5-7.5 0-31.76-15.74-61.36-42.1-79.17-3.43-2.32-4.34-6.98-2.02-10.41a7.509 7.509 0 0 1 10.42-2.02c30.49 20.6 48.7 54.85 48.7 91.6zM183.295 49.251c4.02 1 6.47 5.07 5.46 9.09-.85 3.41-3.91 5.68-7.27 5.68-.6 0-1.21-.07-1.82-.22a95.91 95.91 0 0 0-23.24-2.85c-4.15 0-7.5-3.36-7.5-7.5s3.35-7.5 7.5-7.5c9.09 0 18.13 1.11 26.87 3.3z"
    />
    <Path
      style={{
        opacity:0.5,
        fill: Colors.backgroundColorLight,
      }}
      d="m95.955 168.421 48.81 58.98-43.11 50.79c-23.14-10.41-42.77-27.23-56.64-48.2h.01l50.93-61.57z"
    />
    <Path
      style={{
        opacity:0.5,
        fill: Colors.backgroundColorLight,
      }}
      d="M114.595 73.271c11.4 0 20.65 9.24 20.65 20.65 0 11.4-9.25 20.65-20.65 20.65-11.41 0-20.65-9.25-20.65-20.65 0-11.41 9.24-20.65 20.65-20.65z"
    />
    <Path
      style={{
        opacity:0.1,
        fill: Colors.backgroundColorDark,
      }}
      d="M267.075 45.761c-50.58-50.58-127.47-59.23-187.04-25.94a156.177 156.177 0 0 0-34.27 25.94c-61.02 61.02-61.02 160.3 0 221.32 58.52 58.52 152.24 60.91 213.64 7.18 2.62-2.29 5.18-4.69 7.67-7.18 2.5-2.5 4.89-5.06 7.18-7.68a156.24 156.24 0 0 0 15.23-20.59c37.37-60.33 29.89-140.75-22.41-193.05zm8.25 171.41c-4.3 8.4-9.46 16.28-15.38 23.53-24.47 30.04-61.76 49.21-103.52 49.21-19.52 0-38.06-4.19-54.77-11.72-23.14-10.41-42.77-27.23-56.64-48.2-13.96-21.09-22.09-46.38-22.09-73.57 0-43.9 21.19-82.85 53.9-107.17 22.23-16.54 49.77-26.32 79.6-26.32 73.72 0 133.49 59.76 133.49 133.49 0 21.88-5.26 42.53-14.59 60.75z"
    />
    <Path
      style={{
        opacity: 0.1,
        fill: Colors.backgroundColorDark,
        enableBackground: "new",
      }}
      d="M415.315 415.321c-11.13 11.12-29.17 11.12-40.3 0l-47.79-128.4 88.09 88.09c11.13 11.13 11.13 29.18 0 40.31z"
    />
    <Path
      style={{
        opacity: 0.23,
        fill: Colors.backgroundColorLight,
        enableBackground: "new",
      }}
      d="M261.44 240.701c-24.47 30.04-61.76 49.21-103.52 49.21-19.52 0-38.06-4.19-54.77-11.72-23.14-10.41-42.77-27.23-56.64-48.2-13.96-21.09-22.09-46.38-22.09-73.57 0-43.9 21.19-82.85 53.9-107.17-.06 1.85-.09 3.7-.09 5.56 0 101.77 81.77 184.44 183.21 185.89z"
    />
  </Svg>
)

export default SearchIllSvg
