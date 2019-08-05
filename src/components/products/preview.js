import React from 'react';
import { Text, View, Image } from 'react-native';
import { general } from 'app/src/styles/general';
import Xiaomi from 'app/src/img/xiaomi.jpg';
import Lamp from 'app/src/img/lamp.jpg';
import Lamp2 from 'app/src/img/lamp2.jpg';

const getImage = () => {
  const images = [
    Xiaomi,
    Lamp2,
    Lamp
  ];

  let position = parseInt(Math.random() * 5);

  return images[position] || Xiaomi;
};

const Preview = ({ item }) => (
  <View style={
    [
      general.isShadow,
      general.isMargin,
      general.isRow,
    ]
  }
  >
    <View style={[
      general.isColumn,
      general.isFlex2,
      general.is1,
      general.isMargin,
      {
        alignItems: 'center'
      }
    ]}
    >
      <Image
        style={[
          {
            height: 100,
            width: 100
          }
        ]}
        source={getImage()}
      />
    </View>
    <View style={[
      general.isColumn,
      general.isMargin,
      general.is2
    ]}
    >
      <Text>
        {item.title}
      </Text>
      <Text style={[
        general.isPricing
      ]}
      >
        $200.00
      </Text>
      <Text style={[
        general.isOffer
      ]}
      >
        {item.title}
      </Text>
      <Text style={[
        general.isStock
      ]}
      >
        Stock: 20
      </Text>
    </View>
  </View>
);

export default Preview;
