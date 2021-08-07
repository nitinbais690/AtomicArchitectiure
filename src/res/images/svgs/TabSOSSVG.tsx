import R from '@app/res/R';
import React from 'react';

import Svg, { Path, G } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const TabSOSSVG = ({
  width = 28,
  height = 28,
  fillColor = 'none',
  colorStroke = R.color.gray1,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <G
        fill={fillColor}
        stroke={colorStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        transform="translate(-3.241 -2.713)"
      >
        <Path d="M14.5 10.5v2.333m0 4.667v.012" data-name="Path 9"></Path>
        <Path
          d="M6.333 22.167h16.334a2.333 2.333 0 002.147-3.208L16.53 4.667a2.333 2.333 0 00-4.083 0L4.163 18.958A2.333 2.333 0 006.2 22.167"
          data-name="Path 10"
        ></Path>
      </G>
    </Svg>
  );
};

export default TabSOSSVG;
