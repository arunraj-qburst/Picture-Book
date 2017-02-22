import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';


import styles from './styles';
import Toolbar from '../../components/toolBarView';
import  LockView from '../../components/lockView';

export default class LockViewPin extends Component { 


  render() {
    return (
      <View style={styles.wrapper}>

          <TextInput style={styles.input} placeholder="Enter pin no"/>
          <Button title="Save Changes" color="#ff4500" containerStyle={styles.btn} 
          ></Button>
       
      </View>
    );
  }
}  
