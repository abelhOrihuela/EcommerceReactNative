import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import t from 'tcomb-form-native';
import { general } from 'app/src/styles/general';

var { Form } = t.form;


export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handlePress = () => {
    const {
      navigation
    } = this.props;
    navigation.navigate('App');
  }

  render() {
    const User = t.struct({
      email: t.String,
      password: t.maybe(t.String)
    });

    const options = {
      auto: 'none',
      fields: {
        email: {
          label: null,
          placeholder: 'Correo electronico'
        },
        password: {
          label: null,
          password: true,
          secureTextEntry: true,
          placeholder: 'Contraseña'
        }
      }
    };

    return (
      <View
        style={[
          // general.isMargin,
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
