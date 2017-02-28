
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

    <View style={styles.mainDetailContainer}>

        <View style ={styles.detailContainer}>
          <Text style={styles.children,styles.detailsCaption}>Enter your firstName</Text>
          <TextInput style={styles.input} placeholder="Enter your first name"   onChangeText={(text) => this.setState({emailtext:text})} />
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.children,styles.detailsCaption}>Enter your last name</Text>
          <TextInput style={styles.input} placeholder="Enter your last name"  onChangeText={(text) => this.setState({PhoneNotext:text})} />
        </View>


  </View>

  <View style={styles.mainButtonContainer}>

    <Text>Change Password</Text>
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTxt} >Save</Text>
    </TouchableOpacity>
  </View>



    </View>
 );

  }
}