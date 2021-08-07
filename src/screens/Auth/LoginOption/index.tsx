import React from 'react';

// container/component
import LoginOptionContainer from '@app/containers/Auth/LoginOption';

const LoginOptionScreen = (props: any) => {
  return <LoginOptionContainer navigation={props.navigation} />;
};

export default LoginOptionScreen;
