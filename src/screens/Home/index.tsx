import React from 'react';

// container/component
import HomeContainer from '@app/containers/Home';

const HomeScreen = (props: any) => {
  return <HomeContainer navigation={props.navigation} />;
};

export default HomeScreen;
