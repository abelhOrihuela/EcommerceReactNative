import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import { isTemplateElement } from '@babel/types';

const { width, height } = Dimensions.get('window');

export default class Moment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: new Animated.Value(1)
    }
    this.handlePress = this.handlePress.bind(this);
  }

  componentWillMount() {
    const {
      scale
    } = this.state;

    this.bgFadeInterpolate = scale.interpolate({
      inputRange: [0.9, 1],
      outputRange: ['rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, 0)']
    });

    this.textFade = scale.interpolate({
      inputRange: [0.9, 1],
      outputRange: [0, 1]
    });

    this.calloutTranslate = scale.interpolate({
      inputRange: [0.9, 1],
      outputRange: [0, 100]
    });
  }

  handlePress() {
    let {
      props: { focused, onFocus },
      state: { scale }
    } = this;

    if (focused) {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300
      }).start(() => onFocus(false))
    } else {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 300
      }).start(() => onFocus(true))
    }
  }

  render() {
    const {
      translateX,
      item
    } = this.props;

    const {
      scale
    } = this.state;

    const animatedStyle = {
      transform: [
        { translateX },
        { scale }
      ]
    };

    const bgFadeStyle = {
      backgroundColor: this.bgFadeInterpolate
    };

    const textFadeStyle = {
      opacity: this.textFade
    };

    const calloutStyle = {
      transform: [{ translateY: this.calloutTranslate }]
    };

    return (
      <View style={[styles.container]}>
        <View>
          <View style={[styles.container]}>
            <Animated.Image
              source={item.image}
              style={[styles.image, animatedStyle]}
              resizeMode="cover"
            />
          </View>
          <TouchableWithoutFeedback onPress={this.handlePress}>
            <Animated.View style={[StyleSheet.absoluteFill, styles.center, bgFadeStyle]}>
              <Animated.View style={[styles.textWrap, textFadeStyle]}>
                <Text style={[styles.title]}>{item.title}</Text>

              </Animated.View>
            </Animated.View>
          </TouchableWithoutFeedback>
          <Animated.View style={[styles.callout, calloutStyle]}>
            <View>
              <Text style={[styles.title]}>{item.title}</Text>
            </View>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    overflow: 'hidden',
    backgroundColor: 'black'
  },
  image: {
    flex: 1,
    width: null,
    height: null
  },
  center: {
    justifyContent: 'center'
  },
  textWrap: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    paddingVertical: 20
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 30,
    color: '#FFF',
    textAlign: 'center'
  },
  callout: {
    height: 100,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  }
});
