import R from '@app/res/R';
import LottieView from 'lottie-react-native';
import React from 'react';

function SuccessAnimation(props:any) {
  return (
    <LottieView
      autoPlay={true}
      loop
      style={{
        width: R.unit.scale(220),
        height: R.unit.scale(220),
      }}
      source={require('../../../res/animations/success_animation.json')}
    />
  );
}

export default SuccessAnimation;
