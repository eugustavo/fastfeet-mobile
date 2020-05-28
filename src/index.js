/* eslint-disable no-console */
import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import Routes from '~/routes';
import { store, persistor } from './store';

console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
