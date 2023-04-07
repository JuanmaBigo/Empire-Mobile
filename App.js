import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './store/store'
import { Provider } from 'react-redux';
import AppFull from './navigation/AppFull'

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppFull />
      </NavigationContainer>
    </Provider>
  );
}
