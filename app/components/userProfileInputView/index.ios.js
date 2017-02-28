
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import styles from './styles';

export default class UserProfileInput extends Component {

constructor(props) {
  super(props);

  this.state = {
    firstName:'',
    lastName:''
  };
}



render(){

	return(

    <View style= {styles.container} >

    <View>
      <TextInput style={styles.input} placeholder="Enter your first name"  placeholderTextColor="rgba(149,139,132,1)" onChangeText={(text) => this.setState({emailtext:text})} />
      <TextInput style={styles.input} placeholder="Enter your last name" placeholderTextColor="rgba(149,139,132,1)" onChangeText={(text) => this.setState({PhoneNotext:text})} />
      <TouchableOpacity style={styles.button}>      
          <Text style={styles.buttonTxt} >Save</Text>
      </TouchableOpacity>      
    </View>  



    </View>
 );
  
  }
}