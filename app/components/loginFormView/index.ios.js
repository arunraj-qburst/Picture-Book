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

export default class LoginFormView extends Component {


render(){

    return(

        <View style= {styles.container} >

            <TextInput style={styles.input} placeholder="username or email" placeholderTextColor="rgba(149,139,132,1)" returnKeyType="next"/>
            <TextInput style={styles.input} placeholder="password"  placeholderTextColor="rgba(149,139,132,1)" returnKeyType="go" secureTextEntry/>
            <TouchableOpacity style={styles.button}>      
                    <Text style={styles.buttonTxt} >Login</Text>
            </TouchableOpacity>    

        </View>    


    );



}




}    