import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import homeScreen from '../screens/homeScreen'
import exchangeScreen from '../screens/exchangeScreen'



export const AppTabNavigator = createBottomTabNavigator({
  homeScreen : {
    screen: homeScreen,
      tabBarLabel : "home screen",
  },
  exchangeScreen: {
    screen: exchangeScreen,
      tabBarLabel : "exchange item",
    },
  
});