import R from '@app/res/R';
import React from 'react';

import Svg, { Path } from 'react-native-svg';

const DirectionSVG = ({ width = 24, height = 24 }) => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 21 21">
      <Path
        stroke="#7438AD"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 2.625l-5.416 15a.458.458 0 01-.834 0l-2.916-5.833L3 8.875a.458.458 0 010-.833l15-5.417z"
      ></Path>
    </Svg>
  );
};

export default DirectionSVG;
