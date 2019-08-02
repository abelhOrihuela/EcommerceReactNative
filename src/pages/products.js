import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  async componentDidMount() {
    const {
      store: { products }
    } = this.props;

    await products.load();
    console.info('list items', products.get().map(l => l.name));
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default inject('appStore')(observer(Products));
