import React from 'react';

import {Text, StyleSheet, View} from 'react-native';

import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LinearGradient from 'react-native-linear-gradient';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import theme from '../global/styles/theme';
import {Home} from '../screens/main/Home';
import {Chat} from '../screens/main/Chat';

import IconHome from '../assets/Tab/svg/IconHome.svg';
import {RFValue} from 'react-native-responsive-fontsize';

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}

function ChatStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default function LinearTab() {
  return <View styles={styles.bg}></View>;
  0.5;
}

export function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      tabBar={props => {
        return (
          <LinearGradient
            start={{x: 0.47, y: 1}}
            end={{x: 1, y: 0.1}}
            colors={[
              'rgba(85,120,240,97)',
              'rgba(75,95,200,97)',
              'rgba(39,53,92,97)',
            ]}>
            <BottomTabBar {...props} style={{backgroundColor: 'transparent'}} />
          </LinearGradient>
        );
      }}
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: theme.colors.primary,
        tabBarActiveTintColor: theme.colors.primary,
        unmountOnBlur: true,
        tabBarStyle: {
          borderTopColor: '#0008',
          paddingTop: 10,
          borderTopWidth: 0.2,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0008',
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          //   tabBarLabelPosition: 'below-icon',
          //   tabBarLabel: ({focused}) => (

          //   ),
          tabBarIcon: ({focused}) =>
            focused ? (
              <IconHome width={RFValue(22)} height={RFValue(22)} />
            ) : (
              <IconHome width={RFValue(22)} height={RFValue(22)} />
            ),
        }}
      />

      <Tab.Screen
        name="ChatStack"
        component={ChatStack}
        options={{
          tabBarLabelPosition: 'below-icon',
          tabBarLabel: ({focused}) => (
            <Text
              style={focused ? styles.textActive : styles.textInactive}></Text>
          ),
          tabBarIcon: ({focused}) =>
            focused ? (
              <IconHome width={RFValue(22)} height={RFValue(22)} />
            ) : (
              <IconHome width={RFValue(22)} height={RFValue(22)} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  textActive: {
    fontSize: RFValue(10),
    color: '#EF551A',
  },

  textInactive: {
    fontSize: RFValue(10),
    color: '#525252',
  },
  bg: {
    backgroundColor: 'red',
  },
});
