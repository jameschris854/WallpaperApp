import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  color: string;
  width: number | string;
  height: number | string;
};

const DownloadSvg = ({color, height, width, ...props}: Props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} {...props}>
    <Path fill={color} d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z" />
  </Svg>
);

export default DownloadSvg;
