import React from 'react';

// container/component
import MobileContainer from '@app/containers/Auth/Mobile';

const MobileScreen = (props: any) => {
  return <MobileContainer navigation={props.navigation} />;
};

export default MobileScreen;
