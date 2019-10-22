import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { general } from 'app/src/styles/general';
import { inject, observer } from 'mobx-react';

class Intro extends React.PureComponent {
  async componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const {
      appStore: { products }
    } = this.props;

    await products.load();
    this.checkUserSession();
  }

  checkUserSession = async () => {
    const {
      navigation
    } = this.props;

    const logged = await AsyncStorage.getItem('logged');

    if (JSON.parse(logged)) {
      navigation.navigate('App');
    }
  }

  render() {
    return (
      <View style={[
        {
          flex: 1,
          justifyContent: 'center'
        }
      ]}
      >
        <TouchableOpacity
          onPress={
            () => {
              const {
                navigation
              } = this.props;

              navigation.navigate('Auth');
            }
          }
          style={[
            general.isButton,
            general.isMarginDouble,
            general.isPaddingDouble,
            {
              backgroundColor: 'gray',
              color: 'white'
            }
          ]}
        >
          <Text style={[
            {
              color: 'white',
              textAlign: 'center'
            }
          ]}
          >
            Iniciar
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default inject('appStore')(observer(Intro));
