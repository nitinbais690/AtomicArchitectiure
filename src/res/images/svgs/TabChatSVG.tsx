import R from '@app/res/R';
import React from 'react';

import Svg, { Path } from 'react-native-svg';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const TabChatSVG = ({
  width = 28,
  height = 28,
  fillColor = 'none',
  colorStroke = R.color.gray1,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20">
      <Path
        fill={fillColor}
        stroke={colorStroke}
        strokeWidth="1.5"
        d="M15.416 15.417V3.5a2.75 2.75 0 00-2.75-2.75H3.5A2.75 2.75 0 00.75 3.5V9a2.75 2.75 0 002.75 2.75h8.25z"
        data-name="Chat (3)"
      ></Path>
    </Svg>
  );
};

export default TabChatSVG;
