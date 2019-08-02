import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const Preview = ({ item }) => (
  <Card
    title="HELLO WORLD"
  >
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: 'https://via.placeholder.com/600/24f355' }}
    />
    <Text>
      {item.title.substring(1, 5)}
    </Text>
  </Card>
);

export default Preview;
