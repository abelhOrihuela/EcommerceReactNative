import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { general } from 'app/src/styles/general';

export default class Profile extends React.PureComponent {
  render() {
    return (
      <View style={
        [
          general.isPadding
        ]
      }
      >
        <View style={
          [
            general.isShadow,
            general.isMargin,
            general.isPadding

          ]
        }
        >
          <Text>
            Abel Orihuela
          </Text>
        </View>
      </View>
    );
  }
}
