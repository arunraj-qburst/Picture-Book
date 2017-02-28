
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  View,
  Text,
  TextInput,
  ScrollView
} from 'react-native';

import Button from 'react-native-button';
import styles from './styles';
import Toolbar from '../../components/toolBarView';
import  LockView from '../../components/lockView';
import  LockViewPin from '../../components/lockPinView';

export default class ChildLockView extends Component { 


  render() {
    return (
      <ScrollView style={{backgroundColor:'#ffe0cc'}}>

           <Toolbar/>
           <LockView/>
           <LockViewPin/>
       
      </ScrollView>
    );
  }
}  


