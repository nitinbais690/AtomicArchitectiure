import R from '@app/res/R';
import React from 'react';

import Svg, { Path } from 'react-native-svg';

const BriefcaseSVG = ({ width = 16, height = 16 }) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 16 16">
      <Path
        fill="#7438AD"
        fillOpacity="0.1"
        stroke="#7438AD"
        strokeWidth="1.2"
        d="M12.667 4.667H3.333C2.597 4.667 2 5.264 2 6v6c0 .736.597 1.333 1.333 1.333h9.334c.736 0 1.333-.597 1.333-1.333V6c0-.736-.597-1.333-1.333-1.333z"
      ></Path>
      <Path
        fill="#7438AD"
        fillOpacity="0.1"
        d="M5.333 4.667V3.333A1.333 1.333 0 016.668 2h2.667a1.333 1.333 0 011.333 1.333v1.334"
      ></Path>
      <Path
        stroke="#7438AD"
        strokeLinecap="round"
        strokeWidth="1.2"
        d="M5.333 4.667V3.333A1.333 1.333 0 016.668 2h2.667a1.333 1.333 0 011.333 1.333v1.334"
      ></Path>
      <Path
        stroke="#7438AD"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M8 8v.007M2 8.667a13.333 13.333 0 0012 0"
      ></Path>
    </Svg>
  );
};

export default BriefcaseSVG;
