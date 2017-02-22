
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import styles from './styles';

export default class UserProfileInput extends Component {

constructor(props) {
  super(props);

  this.state = {
    name:'',
    emailtext:'',
    PhoneNotext:'',
    dobtext:''
  };
}



render(){

	return(

    <View style={styles.inputWrapper}>



      <TextInput style={styles.inputFields} placeholder="Enter your Email"  onChangeText={(text) => this.setState({emailtext:text})}
      />

         <TextInput style={styles.inputFields} placeholder="Enter your PhoneNo" onChangeText={(text) => this.setState({PhoneNotext:text})}
         
        />

         <TextInput  style={styles.inputFields} placeholder="Enter your Date of birth" onChangeText={(text) => this.setState({dobtext:text})}
       />


        <Button
                    title="Save Changes"
                    color="#ff4500"
                    onPress={ ()=>{this.props.save(this.state.emailtext,this.state.PhoneNotext,this.state.dobtext)}}
                    style={styles.savebtn}

        />    



    </View>
 );
  
  }
}