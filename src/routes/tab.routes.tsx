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
import IconHomeFocus from '../assets/Tab/svg/iconHomeFocus.svg';
import IconMaps from '../assets/Tab/svg/IconMap.svg';

import {RFValue} from 'react-native-responsive-fontsize';

import IconChat from '../assets/Tab/svg/iconChat.svg';
import IconChatFocused from '../assets/Tab/svg/iconChatFocus.svg';

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

function HomeMaps() {
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

export function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      // tabBar={props => {
      //   return (
      //     <LinearGradient
      //       style={styles.tabBar}
      //       start={{x: 0.47, y: 1}}
      //       end={{x: 1, y: 0.1}}
      //       colors={[
      //         'rgba(85,120,240,97)',
      //         'rgba(75,95,200,97)',
      //         'rgba(39,53,92,97)',
      //       ]}>
      //       <BottomTabBar {...props} style={styles.btnBAr} />
      //     </LinearGradient>
      //   );
      // }}
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: theme.colors.primary,
        tabBarActiveTintColor: theme.colors.primary,
        unmountOnBlur: true,
        tabBarStyle: {
          height: 65,
          borderTopColor: '#0008',
          paddingTop: 30,
          borderTopWidth: 0.2,
          // position: 'absolute',

          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4B5FA2',
          elevation: 4,
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabelPosition: 'below-icon',
          tabBarLabel: ({focused}) => (
            <Text
              style={focused ? styles.textActive : styles.textInactive}></Text>
          ),
          tabBarIcon: ({focused}) =>
            focused ? (
              <IconHomeFocus width={RFValue(40)} height={RFValue(40)} />
            ) : (
              <IconHome width={RFValue(20)} height={RFValue(20)} />
            ),
        }}
      />
      <Tab.Screen
        name="HomeMaps"
        component={HomeMaps}
        options={{
          tabBarLabelPosition: 'below-icon',
          tabBarLabel: ({focused}) => (
            <Text
              style={focused ? styles.textActive : styles.textInactive}></Text>
          ),
          tabBarIcon: ({focused}) =>
            focused ? (
              <IconMaps
                style={styles.buttonmaps}
                width={RFValue(50)}
                height={RFValue(50)}
              />
            ) : (
              <IconMaps
                style={styles.buttonmaps}
                width={RFValue(50)}
                height={RFValue(50)}
              />
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
              <IconChatFocused width={RFValue(40)} height={RFValue(40)} />
            ) : (
              <IconChat width={RFValue(22)} height={RFValue(22)} />
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
  buttonmaps: {
    marginBottom: RFValue(40),
    position: 'absolute',
    top: -50,
    elevation: 2,
  },
  btnBAr: {
    position: 'absolute',
    top: -30,
    marginBottom: RFValue(100),
    zIndex: 20,
    elevation: 2,
  },
  tabBar: {
    height: RFValue(70),
  },
});
