import * as React from 'react';
import Svg, {Path, G, Circle} from 'react-native-svg';

function ApplyWallpaperSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={34}
      viewBox="0 0 120 34"
      fill="none"
      {...props}
    >
      <Path
        transform="matrix(.99906 .0433 .00042 1 25 26.199)"
        fill="#fff"
        d="M0 0H65.0592V3.90072H0z"
      />
      <Path
        transform="matrix(.99906 -.0433 -.00042 1 .002 27.282)"
        fill="#fff"
        d="M0 0H25.0213V3.90072H0z"
      />
      <Path
        transform="matrix(.99906 .0433 -.99906 .0433 25 30.1)"
        fill="#AAA"
        d="M0 0H65.0615V25.0222H0z"
      />
      <Path
        transform="matrix(.99906 .0433 .00042 1 0 27.282)"
        fill="#DEDEDE"
        d="M0 0H65.0592V3.90072H0z"
      />
      <Path
        transform="matrix(.99906 -.0433 -.00042 1 65 30.1)"
        fill="#F7F7F7"
        d="M0 0H25.0213V3.90072H0z"
      />
      <Path
        transform="matrix(.99906 -.0433 .99906 .0433 0 27.282)"
        fill="#EDEDED"
        d="M0 0H25.0222V65.0615H0z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.807 23.595c1.391 0 2.782-.804 3.843-2.412 2.123-3.215 2.123-8.428 0-11.643-1.061-1.607-2.452-2.411-3.843-2.411h-30.8c-1.391 0-2.782.804-3.844 2.411-2.122 3.216-2.122 8.428 0 11.643 1.062 1.608 2.453 2.412 3.844 2.412h30.8z"
        fill="snow"
      />
      <Circle
        r={4.4934}
        transform="scale(-.75828 -1.19374) rotate(45 -3.544 -52.493)"
        fill="#ECECEC"
      />
      <Circle
        r={5.41914}
        transform="scale(-.75828 -1.19374) rotate(45 -3.472 -52.319)"
        stroke="#ECECEC"
        strokeWidth={2}
      />
      <Path d="M28.29 15.671h-8.082V4.525h39.55M59.757.5v4.025" stroke="#fff" />
    </Svg>
  );
}

export default ApplyWallpaperSvg;
