import R from '@app/res/R';
import React from 'react';

import Svg, { Path, G } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const TabReportSVG = ({ width = 28, height = 28, fillColor = 'none' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20">
      <G fill={fillColor} transform="translate(-2.75 -1.375)">
        <Path
          d="M11 1.375l-8.25 2.75v8.25a8.25 8.25 0 0016.5 0v-8.25zm6.7 11a6.7 6.7 0 01-13.406 0v-7.09L11 2.922l6.7 2.363z"
          data-name="Path 3"
        ></Path>
        <Path
          d="M8.129 10.2a.773.773 0 10-1.094 1.1l2.825 2.823a.73.73 0 001.033 0l4.8-4.8a.73.73 0 000-1.033l-.06-.06a.73.73 0 00-1.033 0l-4.226 4.224z"
          data-name="Path 4"
        ></Path>
      </G>
    </Svg>
  );
};

export default TabReportSVG;
