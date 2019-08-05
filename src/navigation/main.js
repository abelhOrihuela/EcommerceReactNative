import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';

import IntroScreen from 'app/src/pages/app/intro';
import SignInScreen from 'app/src/pages/auth/signin';
import HomeScreen from 'app/src/pages/app/products';


const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: HomeScreen,
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
