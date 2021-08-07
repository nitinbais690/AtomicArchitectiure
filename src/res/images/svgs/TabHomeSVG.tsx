import R from '@app/res/R';
import React from 'react';

import Svg, { Path, G } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const TabHomeSVG = ({
  width = 28,
  height = 28,
  fillColor = 'none',
  colorStroke = R.color.gray1,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20">
      <G
        fill={fillColor}
        stroke={colorStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        data-name="Frame (1)"
        transform="translate(-3.429 -1.857)"
      >
        <Path
          d="M18.072 9.429c0 5.5-7.071 10.214-7.071 10.214S3.929 14.929 3.929 9.429a7.071 7.071 0 0114.143 0z"
          data-name="Path 1"
        ></Path>
        <Path
          d="M11 11.786a2.357 2.357 0 10-2.357-2.357A2.357 2.357 0 0011 11.786z"
          data-name="Path 2"
        ></Path>
      </G>
    </Svg>
  );
};

export default TabHomeSVG;
