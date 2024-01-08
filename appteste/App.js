import React, { Component } from 'react';
import { View, StyleSheet,Text,TextInput,Switch,TouchableOpacity} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider, { SliderBase } from '@react-native-community/slider';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome:"",
      idade:0,
      sexo:1,
      limite:0,
      estudante:false
    };

    this.enviardados = this.enviardados.bind(this);

    this.sexolabel = [
      'Masculino','Feminino','Nao binario'
    ]
  };

  enviardados(){
    let sexo;

  if (this.state.sexo === 1) {
    sexo = this.sexolabel[0];
  } else if (this.state.sexo === 2) {
    sexo = this.sexolabel[1];
  } else {
    sexo = this.sexolabel[2];
  }

  alert(String(this.state.nome) + '\n' + String(this.state.idade) +'\n' + sexo + '\n' + String(this.state.limite) + '\nEstudante:' + String(this.state.estudante));
  }

 render(){

  
  return (
    <View style={styles.container}>
     
     <Text style={styles.titulo}>Banco React</Text>
     
     <Text style= {styles.text}>Nome</Text>
     
     <TextInput style={styles.input} onChangeText={(texto) => this.setState({nome: texto})} />
      
      <Text style= {styles.text}>Idade</Text>
      
      <TextInput style={styles.input} onChangeText={(texto) => this.setState({idade: texto})} />
      
      <Text style= {styles.text}>Sexo</Text>

      <Picker selectedValue={this.state.sexo} onValueChange={(value,index) => this.setState({sexo: value })} >
        <Picker.Item key={1} value={1} label='Masculino'/>
        <Picker.Item key={2} value={2} label='Feminino'/>
        <Picker.Item key={3} value={3} label='Nao binario'/>
      </Picker>
      
      <Text style= {styles.text}>Seu Limite</Text>
      
      <Slider minimumValue={0} maximumValue={1000} onValueChange={(valor) => this.setState({limite: valor})}/>
      
      <Switch value={this.state.estudante}
      onValueChange={(valor) => this.setState({estudante: valor})}/>

      <TouchableOpacity onPress={this.enviardados}>
        <Text>Enviar</Text>
      </TouchableOpacity>

      
    </View>
   );
 }
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 15,
  },
  titulo:{
    fontSize:20,
    fontWeight:"bold"
  },
  text:{
    textAlign:"center"
  },
  input:{
    height:45,
    margin:5,
    width:400,
    borderWidth:1,
    borderColor:"#ff00ff"
  },
});