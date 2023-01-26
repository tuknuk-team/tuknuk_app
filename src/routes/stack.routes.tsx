import React from 'react';

import type {RootStackParamList} from '../utils/RootStackParams';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TabRoutes} from './tab.routes';

const {Navigator} = createNativeStackNavigator<RootStackParamList>();

import {Signin} from '../screens/Auth/Signin';
import {Validator} from '../screens/Auth/Validator';
import {Verify} from '../screens/Auth/Verify';
import {HomeDesable} from '../screens/Lawsuit/HomeDesable';
import {StepOne} from '../screens/Onboarding/StepOne';
import {StepTwo} from '../screens/Onboarding/StepTwo';
import {StepThree} from '../screens/Onboarding/StepThree';
import {StepFour} from '../screens/Onboarding/StepFour';
import {Initial} from '../screens/Initial';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="StepThree">
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
          name="HomeDesable"
          component={HomeDesable}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StepOne"
          component={StepOne}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StepTwo"
          component={StepTwo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StepThree"
          component={StepThree}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StepFour"
          component={StepFour}
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
