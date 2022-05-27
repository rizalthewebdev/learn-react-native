import React from 'react';
import MainContainer from './containers/MainContainer';
import {Provider} from 'react-redux';
import {store} from './app/store';

export default function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}
