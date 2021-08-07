//
// note:
// 			key: UPPERCASE with undescore (_) for separation. add _STACK for stack and _SCREEN for screen
// 			value: PascalCase. add Stack for stack and Screen for screen
//

//
// used to declare stacks in navigation/index.ts
//
export const NavigationStackC = {
  AUTH_STACK: 'AuthStack',
  APP_STACK: 'AppStack',
};

//
// used to declare stacks in navigation/AuthStack.ts
//
export const AuthStackC = {
  AUTH_STACK_SCREEN: 'AuthStackScreen',
  SIGNUP_OPTION_SCREEN: 'SignupOptionScreen',
  LOGIN_OPTION_SCREEN: 'LoginOptionScreen',
  ON_BOARDINF_SCREEN: 'OnBoardingScreen',
  LOGIN_AUTH_SCREEN: 'LoginAuthScreen',
  SIGNUP_AUTH_SCREEN: 'SignupAuthScreen',
  PASSWORD_AUTH_SCREEN: 'PasswordAuthScreen',
  MOBILE_AUTH_SCREEN: 'MobileAuthScreen',
  VERIFICATION_AUTH_SCREEN: 'VerificationAuthScreen',
  SUCCESS_ANIMATION_SCREEN: 'SuccessScreen',
};

//
// used to declare stacks in navigation/AppStack.ts
//
export const AppStackC = {
  APP_BOTTOM_STACK_SCREEN: 'AppBottomStackScreen',
  SEARCH_PLACE_SCREEN: 'SearchPlaceScreen',
};
