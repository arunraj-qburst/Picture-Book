import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { ActionCreators } from '../../actions';
import { bindActionCreators } from 'redux';

import style from './styles';
import UserProfileEditComp from '../../components/userDetailsEditView';

import {
  AppRegistry,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';

export default class UserProfileEdit extends Component {

render(){

    return(

    <KeyboardAvoidingView style={style.container} behavior="padding">
        <UserProfileEditComp/>
    </KeyboardAvoidingView>  

    );
}

}