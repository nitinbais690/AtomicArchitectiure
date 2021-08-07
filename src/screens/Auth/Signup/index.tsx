import React from 'react';

// container/component
import SignupContainer from '@app/containers/Auth/Signup';

const SignupScreen = (props: any) => {
  return <SignupContainer navigation={props.navigation} />;
};

export default SignupScreen;
