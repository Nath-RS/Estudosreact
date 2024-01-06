import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';

import {Slider} from '@react-native-community/slider';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      valor:0
    };
  };

 render(){

  
  return (
    <View style={styles.container}>
      <Slider 
      style={{width: 200, height: 40}}
      minimumValue={0}
      maximumValue={1}
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTintColor="#000000"
      />
    </View>
   );
 }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 15,
  }
});