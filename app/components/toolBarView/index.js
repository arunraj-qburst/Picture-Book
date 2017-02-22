
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  View,
  Text,
  TextInput,
  ToolbarAndroid
} from 'react-native';

import Button from 'react-native-button';
import styles from './styles';
import backImage from '../../images/arrow-back.png';

export default class Toolbar extends Component { 

  render() {
    return (
      <View>

             <ToolbarAndroid
            navIcon= {backImage} 
             title="Child Lock"
             style ={styles.wrapper}/>
    
      </View>
    );
  }
}  
