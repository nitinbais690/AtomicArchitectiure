import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import { AuthStackC } from '@app/constants/navigation';

import AuthStackScreen from '@app/screens/misc/AuthStackScreen';
import SignupOptionScreen from '@app/screens/Auth/SignupOption';
import LoginOptionScreen from '@app/screens/Auth/LoginOption';
import AuthLoginScreen from '@app/screens/Auth/Login';
import AuthSignupScreen from '@app/screens/Auth/Signup';
import OnBoardingScreen from '@app/screens/OnBoarding';
import AuthPasswordScreen from '@app/screens/Auth/Password';
import AuthMobileScreen from '@app/screens/Auth/Mobile';
import AuthVerificationScreen from '@app/screens/Auth/Verification';
import SuccessScreen from '@app/screens/misc/SuccessScreen';

const AuthStack = createStackNavigator(
  {
    [AuthStackC.AUTH_STACK_SCREEN]: AuthStackScreen,
    [AuthStackC.SIGNUP_OPTION_SCREEN]: SignupOptionScreen,
    [AuthStackC.LOGIN_OPTION_SCREEN]: LoginOptionScreen,
    [AuthStackC.ON_BOARDINF_SCREEN]: OnBoardingScreen,
    [AuthStackC.LOGIN_AUTH_SCREEN]: AuthLoginScreen,
    [AuthStackC.SIGNUP_AUTH_SCREEN]: AuthSignupScreen,
    [AuthStackC.PASSWORD_AUTH_SCREEN]: AuthPasswordScreen,
    [AuthStackC.MOBILE_AUTH_SCREEN]: AuthMobileScreen,
    [AuthStackC.VERIFICATION_AUTH_SCREEN]: AuthVerificationScreen,
    [AuthStackC.SUCCESS_ANIMATION_SCREEN]: SuccessScreen,
  },
  {
    initialRouteName: AuthStackC.AUTH_STACK_SCREEN,
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'card' : 'modal',
  },
);

export default AuthStack;
