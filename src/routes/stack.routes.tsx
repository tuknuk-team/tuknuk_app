import React from 'react';

import type {RootStackParamList} from '../utils/RootStackParams';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TabRoutes} from './tab.routes';

const {Navigator} = createNativeStackNavigator<RootStackParamList>();

import {Signin} from '../screens/Auth/Signin';
import {Validator} from '../screens/Auth/Validator';
import {Verify} from '../screens/Auth/Verify';
import {CompletAccount} from '../screens/Auth/CompletAccount';
import {Initial} from '../screens/Initial';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Initial">
        <Stack.Screen
          name="Initial"
          component={Initial}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Validator"
          component={Validator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verify"
          component={Verify}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CompletAccount"
          component={CompletAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabRoutes"
          component={TabRoutes}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
}
