
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
  KeyboardAvoidingView,
  Image
} from 'react-native';

import Button from 'react-native-button';
import styles from './styles';
import LoginFormView from '../../components/loginFormView/index.ios';
import logo from '../../images/BookIconOrange.png';

class LoginPageView extends Component {

 onSignUp(){
    //this.props.gotoSignUpPage({ key: 'Signup',index:1});
       this.props.navigator.push({ key: 'Signup',index:1});
  }
  onLoginPress(){
     // this.setState({ key: 'BooksTabs',index:2});
    //this.props.onLogin({ key: 'BooksTabs',index:2});


   // if (route.index === 0) {
            this.props.navigator.push({ key: 'BooksTabs',index:2});//.routes[1]);
        //  } else {
        //   navigator.pop();
        // }
  }

  render() {
    return (

      <KeyboardAvoidingView style = {styles.container} behavior="padding">

          <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logoImage}/>
              <Text style= {styles.logo} >Picture Logo</Text>
          </View>

          <View style = {styles.inputContainer}>
              <LoginFormView/>
          </View>
    </KeyboardAvoidingView>


    );
  }
}
 function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
     navigationState: state.navigationState,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageView);
