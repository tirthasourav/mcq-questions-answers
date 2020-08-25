/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BaseRoute from './src/routes/BaseRoute';
import COLORS from './src/res/Colors';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar
          backgroundColor={COLORS.PRIMARY_COLOR_DARK}
          barStyle={'dark-content'}
        />
        <BaseRoute />
      </NavigationContainer>
    );
  }
}

export default App;
