import React from 'react';

// container/component
import LoginContainer from '@app/containers/Auth/Login';

const LoginScreen = (props: any) => {
  return <LoginContainer navigation={props.navigation} />;
};

export default LoginScreen;
