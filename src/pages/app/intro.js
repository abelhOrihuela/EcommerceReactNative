import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { general } from 'app/src/styles/general';

export default class Intro extends React.PureComponent {
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
