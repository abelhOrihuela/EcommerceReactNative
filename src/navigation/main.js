import React, { Component } from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';

import IntroScreen from 'app/src/pages/app/intro';
import SignInScreen from 'app/src/pages/auth/signin';
import HomeScreen from 'app/src/pages/app/products';
import Profile from 'app/src/pages/app/profile';
import Cart from 'app/src/pages/app/cart';
import { Icon } from 'react-native-elements';

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        inactiveBackgroundColor: 'white'
      },
      tabBarIcon: ({ tintColor }) => <Icon type="font-awesome" color={tintColor} name="home" />
    })
  },
  Cart: {
    screen: Cart,
    navigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        inactiveBackgroundColor: 'white'
      },
      tabBarIcon: ({ tintColor }) => <Icon type="font-awesome" color={tintColor} name="shopping-cart" />
    })
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        inactiveBackgroundColor: 'white'
      },
      tabBarIcon: ({ tintColor }) => <Icon type="font-awesome" color={tintColor} name="user" />
    })
  },
});

const AppStack = createStackNavigator({
  Home: {
    screen: AppNavigator,
  }
});

const AuthStack = createStackNavigator({
  SignIn: {
    screen: SignInScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  }
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: IntroScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
