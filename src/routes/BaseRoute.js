import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TestScreen from '../containers/test-screen/TestScreen';
import ResultScreen from '../containers/result-screen/ResultScreen';
import COLORS from '../res/Colors';

const Stack = createStackNavigator();

function BaseRoute() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: COLORS.WHITE,
        headerStyle: {backgroundColor: COLORS.PRIMARY_COLOR},
        headerTitleAlign: COLORS.WHITE,
      }}>
      <Stack.Screen name="Test Screen" component={TestScreen} />
      <Stack.Screen name="Result Screen" component={ResultScreen} />
    </Stack.Navigator>
  );
}

export default BaseRoute;
