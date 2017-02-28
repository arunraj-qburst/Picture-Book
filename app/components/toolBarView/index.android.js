import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { ActionCreators } from '../../actions'
import { bindActionCreators } from 'redux'
import {
  View,
  KeyboardAvoidingView
} from 'react-native'
   
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
