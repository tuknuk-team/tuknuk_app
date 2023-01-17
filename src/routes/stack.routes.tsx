import React from 'react';

import type {RootStackParamList} from '../utils/RootStackParams';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator} = createNativeStackNavigator<RootStackParamList>();

import {Signin} from '../screens/Signin';
import {Initial} from '../screens/Initial';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Initial">
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Initial"
          component={Initial}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
}
