/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Import a library to help create a Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a Component
const App = () => (
  <Header headText={'Albums!'} />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
