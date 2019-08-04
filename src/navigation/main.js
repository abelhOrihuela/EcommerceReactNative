import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import IntroScreen from 'app/src/pages/app/intro';
import SignInScreen from 'app/src/pages/auth/signin';
import HomeScreen from 'app/src/pages/app/products';

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator({
  SignIn: SignInScreen
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
