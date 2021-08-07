import R from '@app/res/R';
import React from 'react';

import Svg, { Path } from 'react-native-svg';

const LocationSVG = ({ width = 16, height = 16 }) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 16 16">
      <Path
        fill="#7438AD"
        fillOpacity="0.1"
        d="M13.143 6.857c0 4-5.143 7.429-5.143 7.429s-5.143-3.429-5.143-7.429a5.143 5.143 0 0110.286 0z"
      ></Path>
      <Path
        fill="#7438AD"
        fillOpacity="0.1"
        d="M8 8.572a1.714 1.714 0 100-3.43 1.714 1.714 0 000 3.43z"
      ></Path>
      <Path
        stroke="#7438AD"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.143 6.857c0 4-5.143 7.429-5.143 7.429s-5.143-3.429-5.143-7.429a5.143 5.143 0 0110.286 0z"
      ></Path>
      <Path
        stroke="#7438AD"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 8.572a1.714 1.714 0 100-3.43 1.714 1.714 0 000 3.43z"
      ></Path>
    </Svg>
  );
};

export default LocationSVG;
