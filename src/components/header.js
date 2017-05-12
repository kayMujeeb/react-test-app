/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Import a library to help create a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make Component
const Header = () => {

const { textStyle, viewStyle } = styles;

return (
  <View style={viewStyle}>
    <Text style={textStyle}>Albums!</Text>
  </View>
);
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: 'papayawhip'
  }
};

// Make Component available to other parts of the app
export default Header;
