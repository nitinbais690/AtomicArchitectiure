import R from '@app/res/R';
import React from 'react';

import Svg, { Path, G } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const TabContactSVG = ({
  width = 28,
  height = 28,
  fillColor = 'none',
  colorStroke = R.color.gray1,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20">
      <G fill={fillColor} stroke={colorStroke} strokeWidth="1.5" transform="translate(-2 -1.957)">
        <Path
          d="M8.25 10.083a3.667 3.667 0 10-3.667-3.666 3.667 3.667 0 003.667 3.666z"
          data-name="Path 5"
        ></Path>
        <Path
          d="M2.75 19.25v-1.833a3.667 3.667 0 013.667-3.667h3.667a3.667 3.667 0 013.667 3.667v1.833"
          data-name="Path 6"
        ></Path>
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.667 2.869a3.667 3.667 0 010 7.1"
          data-name="Path 7"
        ></Path>
        <Path d="M19.25 19.25v-1.833a3.666 3.666 0 00-2.75-3.529" data-name="Path 8"></Path>
      </G>
    </Svg>
  );
};

export default TabContactSVG;
