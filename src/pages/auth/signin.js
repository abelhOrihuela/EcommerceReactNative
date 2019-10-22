import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import t from 'tcomb-form-native';
import { general } from 'app/src/styles/general';
const { Form } = t.form;

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handlePress = async () => {
    const {
      navigation
    } = this.props;

    const value = this.form.getValue();
    await AsyncStorage.setItem('logged', JSON.stringify(true));
    if (value) {
      navigation.navigate('App');
    }
  }

  render() {
    const User = t.struct({
      email: t.String,
      password: t.String
    });

    const options = {
      auto: 'none',
      fields: {
        email: {
          label: null,
          placeholder: 'Correo electronico',
          error: 'Insert a valid email'
        },
        password: {
          label: null,
          password: true,
          secureTextEntry: true,
          placeholder: 'Contraseña',
          error: 'Insert a valid email'
        }
      }
    };

    return (
      <View
        style={[
          general.isPaddingDouble,
          {
            flex: 1,
            justifyContent: 'center'
          }
        ]}
      >
        <Form
          ref={c => (this.form = c)}
          type={User}
          options={options}
          onChange={this.onChange}
        />

        <TouchableOpacity
          onPress={
            this.handlePress
          }
          style={[
            {
              backgroundColor: '#757575'
            },
            general.isButton
          ]}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
            Iniciar sesión
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
