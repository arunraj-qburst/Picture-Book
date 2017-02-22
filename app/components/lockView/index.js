import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  View,
  Text,
  TextInput,
  Image
} from 'react-native';

import Button from 'react-native-button';
import styles from './styles';
import lockIcon from '../../images/lockIcon.png';


export default class LockView extends Component { 


  render() {
    return (
      <View style={styles.wrapper}>

            <Text style={styles.locked}>Locked</Text>
             <Image style={styles.lockIcon}source={lockIcon}/>
          
      </View>
    );
  }
}  