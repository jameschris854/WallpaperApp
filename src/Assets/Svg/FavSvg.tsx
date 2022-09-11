import * as React from "react"
import { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg"

type Props = {
  height: number | string;
  width: number | string;
  color: ColorValue;
};

function FavSvg({width,height,color,...props}:Props) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 71 61"
      fill="none"
      {...props}
      
    >
      <Path
        d="M43.694 55.226c7.735-5.748 18.898-14.746 23.55-21.942 3.48-5.376 4.613-12.037 3.1-18.23C67.108.947 49.195-4.818 38.038 4.636c-.628.528-1.206 1.114-1.8 1.715a69.46 69.46 0 01-.739.741 69.368 69.368 0 01-.74-.741c-.593-.601-1.171-1.187-1.799-1.715C21.804-4.818 3.891.946.657 15.054c-1.514 6.193-.382 12.854 3.1 18.23 4.65 7.196 15.814 16.194 23.55 21.942C29.462 56.828 35.5 61 35.5 61s6.038-4.172 8.194-5.774z"
        fill={color}
      />
    </Svg>
  )
}

export default FavSvg
