
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { ActionCreators } from '../../actions';
import { bindActionCreators } from 'redux';

import style from './styles';
import UserDetails from '../../components/userDetailsView';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class UserProfile extends Component {
 
  render() {
    return (

    <View style={style.container}>
          <UserDetails/>
    </View>

    );
  }
}