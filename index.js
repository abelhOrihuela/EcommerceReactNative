/**
 * @format
 */
import React, { Fragment } from 'react';
import { Provider } from 'mobx-react';
import {
  AppRegistry,
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';

import ProductsStore from 'app/src/mobx/products';
import Products from 'app/src/pages/app/products';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import App from './src/navigation/main';
import { name as appName } from './app.json';

const AppMain = () => (
  <Provider appStore={{
    products: ProductsStore
  }}
  >
    <App />

    {/* <Fragment>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
      />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{
            backgroundColor: Colors.white
          }}
        >
        </ScrollView>
      </SafeAreaView>
    </Fragment> */}
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppMain);
