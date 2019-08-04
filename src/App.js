/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Provider } from 'mobx-react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import ProductsStore from 'app/src/mobx/products';
import Products from 'app/src/pages/products';

const App = () => (
  <Provider appStore={{
    products: ProductsStore
  }}
  >
    <Fragment>
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
          <Products />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  </Provider>
);

export default App;
