import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import t from 'tcomb-form-native';

const { Form } = t.form;


class BaseForm extends Component {
  onSubmit() {
    const value = this.form.getValue();

    const {
      onSubmit
    } = this.props;

    if (value && onSubmit) {
      onSubmit(value);
    }
  }

  onChange(e) {
    const {
      onChange
    } = this.props;

    if (onChange) {
      onChange(e);
    }
  }

  render() {
    const {
      type: Model,
      label,
      options,
      value
    } = this.props;

    return (
      <View style={[]}>
        <Form
          type={Model}
          ref={c => (this.form = c)}
          options={{
            ...options,
            ...{}
          }}
          value={value}
          onChange={e => this.onChange(e)}
        />
        {
          <TouchableHighlight
            style={styles.button}
            onPress={e => this.onSubmit(e)}
            underlayColor="#99d9f4"
          >
            <Text style={styles.buttonText}>{label || 'Guardar'}</Text>
          </TouchableHighlight>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'ginora-regular',
    fontWeight: 'normal'
  },
  button: {
    height: 45,
    backgroundColor: '#2771A2',
    borderColor: '#2771A2',
    borderWidth: 1,
    // borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});


export default BaseForm;
