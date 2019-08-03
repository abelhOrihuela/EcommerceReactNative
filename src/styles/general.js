import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { StyleSheet, Platform } from 'react-native';


console.log('Colors', Colors)
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
  isMargin: {
    margin: 5,
  },
  isRow: {
    flexDirection: 'row'
  },
  isColumn: {
    flexDirection: 'column'
  },
  is1: {
    flex: 1
  },
  is2: {
    flex: 2
  },
  is3: {
    flex: 3
  },
  isPricing: {
    fontSize: 20
  },
  isOffer: {
    fontSize: 10,
    color: 'green',
  },
  isStock: {
    fontSize: 10,
    color: Colors.light,
  },
  isShadow: {
    margin: 5,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  }
});

module.exports = {
  general: styles
};
