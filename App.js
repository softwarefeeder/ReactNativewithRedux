/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button,Switch,Image} from 'react-native';
import {Provider} from 'react-redux';


import A from './A';
import B from './B';

type Props = {};
export default class App extends Component<Props> {
  
  constructor(Props)
  {
    super(Props);
  }
  
  render() {

    return (
       <Provider store={store1}>
      <View style={styles.container}>
         <A/>
         <B/>
      </View>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom:10,
    height:20
  },
  button_style: {
    marginBottom: 10,
    borderWidth:2, 
    padding: 10,
  }
});
