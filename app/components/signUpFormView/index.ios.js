import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { ActionCreators } from '../../actions'
import { bindActionCreators } from 'redux'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity	
} from 'react-native';

import styles from './styles' 

export default class SignUpFormView extends Component {

render(){

    return(

        <View style= {styles.container} >

            <TextInput style={styles.input} placeholder="First name" placeholderTextColor="rgba(149,139,132,1)" returnKeyType="next"/>
            <TextInput style={styles.input} placeholder="Last name"  placeholderTextColor="rgba(149,139,132,1)" returnKeyType="go" />
            <TextInput style={styles.input} placeholder="Age" placeholderTextColor="rgba(149,139,132,1)" returnKeyType="go" />
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" placeholderTextColor="rgba(149,139,132,1)" returnKeyType="go"/>
            <TextInput style={styles.input} placeholder="Password" placeholderTextColor="rgba(149,139,132,1)" returnKeyType="go" secureTextEntry/>
            <TextInput style={styles.input} placeholder="Confirm password" placeholderTextColor="rgba(149,139,132,1)" returnKeyType="go" secureTextEntry/>
            <TouchableOpacity style={styles.button}>      
                    <Text style={styles.buttonTxt} >Register</Text>
            </TouchableOpacity>


        <View style={styles.loginContainer }>
            <Text style={styles.loginText}>Already Registered?</Text>
            <TouchableOpacity style={styles.button , styles.buttonLogin}>      
                    <Text style={styles.buttonTxt} >Login</Text>
            </TouchableOpacity>
        </View>    

        </View>    


    );



}

}    