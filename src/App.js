import React from 'react';
import MainContainer from './containers/MainContainer';
import {Provider} from 'react-redux';
import {store} from './app/store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import {useDeviceContext, useAppColorScheme} from 'twrnc';
import tw from './lib/tailwind';

let persistor = persistStore(store);

export default function App() {
  useDeviceContext(tw, {withDeviceColorScheme: false});
  const [colorScheme, toggleColorScheme, setColorScheme] =
    useAppColorScheme(tw);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainContainer
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
          setColorScheme={setColorScheme}
        />
        <Toast />
      </PersistGate>
    </Provider>
  );
}
