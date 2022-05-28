import React from 'react';
import MainContainer from './containers/MainContainer';
import {Provider} from 'react-redux';
import {store} from './app/store';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <Provider store={store}>
      <MainContainer />
      <Toast />
    </Provider>
  );
}
