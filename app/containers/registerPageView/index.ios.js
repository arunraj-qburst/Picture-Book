
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { ActionCreators } from '../../actions'
import { bindActionCreators } from 'redux'
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity
} from 'react-native';

import Button from 'react-native-button';
import styles from './styles';
import SignUpView from '../../components/signUpFormView';


class SignUpPageView extends Component {
constructor(props)
{
  super(props)
}
 onBackNavigation(){
   this. props.gotoPreviousScreen({ key: 'Login',index:0});
}

onLogin()
{
  this.props.navigator.replace({ key: 'Login',index:0});
}


  render() {
    return (
<KeyboardAvoidingView style = {styles.container} behavior="padding">
      <SignUpView/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPageView);
