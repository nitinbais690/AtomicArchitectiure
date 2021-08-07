import { NavigationActions, StackActions } from 'react-navigation';

let _navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}

function navigate(routeName: string, params?: any) {
  _navigator.dispatch({
    type: NavigationActions.NAVIGATE,
    routeName,
    params,
  });
}

function goBack(target?: string) {
  _navigator.dispatch({
    type: NavigationActions.BACK,
    target: target ? target : undefined,
  });
}

function pop(popIndex: number = 1) {
  _navigator.dispatch({
    type: StackActions.POP,
    count: popIndex,
  });
}

function popToTop() {
  _navigator.dispatch({
    type: StackActions.POP_TO_TOP,
  });
}

async function stackFirst(routeName: string, params: any = {}) {
  await popToTop();
  await navigate(routeName, params);
}

export default {
  setTopLevelNavigator,
  navigate,
  goBack,
  stackFirst,
  pop,
  popToTop,
};
