import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { inject, observer } from 'mobx-react';
import Preview from 'app/src/components/products/preview';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  // async componentDidMount() {
  //   const {
  //     appStore: { products }
  //   } = this.props;

  //   await products.load();
  //   this.setState({
  //     loading: false
  //   });
  // }

  render() {
    const {
      appStore: { products }
    } = this.props;

    const {
      loading
    } = this.state;

    if (loading) {
      return (<Text>Loading</Text>);
    }


    return (
      <View style={{
        margin: 5,
        backgroundColor: 'white'
      }}
      >
        <FlatList
          numColumns={1}
          data={
            products.get().map(l => l)
          }
          renderItem={({ item }) => (<Preview item={item} />)}
        />
      </View>
    );
  }
}

export default inject('appStore')(observer(Products));
