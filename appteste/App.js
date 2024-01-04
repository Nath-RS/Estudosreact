import React, { Component } from "react";
import { View, ScrollView,StyleSheet} from "react-native";

class App extends Component {

  
  render(){

    return(
      <View style ={style.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.img1}></View>
        <View style={style.img2}></View>
        <View style={style.img3}></View>
        <View style={style.img1}></View>
        <View style={style.img2}></View>
        </ScrollView>
        </View>
      
  );
}
}

const style = StyleSheet.create({

container:{
  flex:1,
},
img1:{
 backgroundColor:'green',
 height:250,
},
img2:{
  backgroundColor:'red',
  height:250,
},
img3:{
  backgroundColor: 'yellow',
  height:250,
},
});

export default App;