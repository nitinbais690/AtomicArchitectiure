/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import RootAppConnect from './RootApp';
import FlashMessage from 'react-native-flash-message';

function RootApp() {
  return (
    <Provider store={store}>
      <RootAppConnect />
      <FlashMessage position="top" />
    </Provider>
  );
}

export default RootApp;
