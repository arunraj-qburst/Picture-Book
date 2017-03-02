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
import { emailValidation,emptyValidation,passwordValidation } from '../../helper/helperFunctionsValidate';

import styles from './styles'

export default class LoginFormView extends Component {


  constructor(props) {
   super(props);
   this.state = {
     flag:true,
     emailValue:"",
     passwordValue:"",
     emailText:"",
     passwordText:""

   };
   this.loginValidate = this.loginValidate.bind(this);

  }


loginValidate(){
if(emptyValidation(this.state.emailValue)){

    if(emailValidation(this.state.emailValue)){
      this.setState({ emailText:"" });
    }
    else{
      this.setState({emailText:"Invalid user email"})
    }

}

else {
  this.setState({emailText:"Invalid user email"});
}
//.............................................................

if(emptyValidation(this.state.passwordValue)){

    if(passwordValidation(this.state.passwordValue)){
      this.setState({ passwordText:"" });
    }
    else{
      this.setState({passwordText:"Invalid password"})
    }

}

else {
  this.setState({passwordText:"Invalid password"});
}

}


render(){
    return(

        <View style= {styles.container}>

            <TextInput style={styles.input} keyboardType="email-address"
            placeholder="username or email" placeholderTextColor="rgba(149,139,132,1)"
            returnKeyType="next" onChangeText = {(text)=>{this.setState({emailValue:text})  }}/>
          
            <TextInput style={styles.input} placeholder="password"
            placeholderTextColor="rgba(149,139,132,1)"
            returnKeyType="go" secureTextEntry onChangeText={(text)=>{this.setState({passwordValue:text}) }}/>


            <TouchableOpacity style={styles.button} onPress={ ()=>{ this.loginValidate()} }>
                    <Text style={styles.buttonTxt} >Login</Text>
            </TouchableOpacity>

            <Text>{this.state.emailText} {this.state.passwordText}</Text>

        </View>


    );



}




}
