import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
  } from 'react-native';

import Pessoa from './src/Pessoa.js';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id:'1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com'},
        {id:'2', nome: 'Joao', idade: 22, email: 'joao@joao.com'},
        {id:'3', nome: 'Henrique', idade: 39, email: 'henrique@henrique.com'},
        {id:'4', nome: 'Paulo', idade: 15, email: 'paulo@paulo.com'},
        {id:'5', nome: 'JOSE', idade: 12, email: 'jose@jose.com'},
      ]
    };
  }

  render(){
    return(
      <View style={styles.container}> 

      <FlatList
      data={this.state.feed}
      keyExtractor={(item) => item.id}
      renderItem={ ({item}) => <Pessoa data={item} /> }
      />

      </View>    
    );
  }

}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  
});

export default App;


