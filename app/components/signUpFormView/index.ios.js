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
import {
  firstNameValidation,
  emptyValidation,
  lastNameValidation,
  passwordValidation,
  emailValidation
} from '../../utils/TextValidator';

export default class SignUpFormView extends Component {

constructor(props){
super(props);
this.state={

firstnameValue:"",
firstNameText:"",
lastNameValue:"",
lastNameText:"",
emailValue:"",
emailText:"",
passWordValue:"",
passWordText:"",
confirmPassWordValue:"",
confirmPassWordText:""
}

this.signUpValidate = this.signUpValidate.bind(this);
}

signUpValidate(){

if(emptyValidation(this.state.firstnameValue)){

  if(firstNameValidation(this.state.firstnameValue)){
  this.setState({firstNameText:""});
  }
  else{
  this.setState({firstNameText:"Invalid firstname"});
  }

}

else{
this.setState({firstNameText:"First name field Empty"});
}

// lastname validation

if(emptyValidation(this.state.lastNameValue)){

  if(lastNameValidation(this.state.lastNameValue)){
  this.setState({lastNameText:""});
  }
  else{
  this.setState({lastNameText:"Invalid lastname"});
  }

}

else{
this.setState({lastNameText:"Last name field Empty"});
}

// email validation

if(emptyValidation(this.state.emailValue)){

  if(emailValidation(this.state.emailValue)){
  this.setState({emailText:""});
  }
  else{
  this.setState({emailText:"Invalid email"});
  }

}

else{
this.setState({emailText:" Email field empty"});
}

//password validation

if(emptyValidation(this.state.passWordValue)){

  if(passwordValidation(this.state.passWordValue)){
  this.setState({passWordText:""});
  }
  else{
  this.setState({passWordText:"Invalid password"});
  }

}

else{
this.setState({passWordText:"Password field empty"});
}





}


render(){

    return(

        <View style= {styles.container} >

          <View style ={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="First name" placeholderTextColor="rgba(149,139,132,1)" returnKeyType="next"  onChangeText = {(text)=>{this.setState({firstnameValue:text})  }}/>
            <TextInput style={styles.input} placeholder="Last name"  placeholderTextColor="rgba(149,139,132,1)" returnKeyType="next"  onChangeText = {(text)=>{this.setState({lastNameValue:text})  }}/>
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" placeholderTextColor="rgba(149,139,132,1)" returnKeyType="next" onChangeText = {(event)=>{this.setState({firstnameValue:text})  }}/>
            <TextInput style={styles.input} placeholder="Password" placeholderTextColor="rgba(149,139,132,1)" returnKeyType="next" secureTextEntry  onChangeText = {(text)=>{this.setState({passWordValue:text})  }}/>
            <TextInput style={styles.input} placeholder="Confirm password" placeholderTextColor="rgba(149,139,132,1)" returnKeyType="next" secureTextEntry  onChangeText = {(text)=>{this.setState({confirmPassWordValue:text})  }}/>
            <TouchableOpacity style={styles.button} onPress={ ()=>{ this.signUpValidate()} }>
                    <Text style={styles.buttonTxt} >Register</Text>
            </TouchableOpacity>
            <Text style={styles.inputValidationText}> {this.state.firstNameText} {this.state.lastNameText} {this.state.emailText} {this.state.passWordText} {this.state.confirmPassWordText} </Text>
         </View>

        <View style={styles.loginContainer }>
            <Text style={styles.loginText}>Already Registered?</Text>
            <TouchableOpacity style={styles.button , styles.buttonLogin} >
                    <Text style={styles.buttonTxt} >Login</Text>
            </TouchableOpacity>
        </View>

        </View>


    );



}

}