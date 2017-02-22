import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';

import styles from './styles';
export default class UserDetails extends Component {

constructor(props) {
  super(props);
  this.state = this.props.data;
}


  render() {
    return (

    

      <View style = {{ flex:2, backgroundColor:'#ffe0cc' ,paddingLeft:20,paddingRight:20, }}>
		    <Text style= {styles.UserInfo}>User Info</Text>

        <Text style={styles.details,styles.detailsCaption}>Email</Text>
    		<Text style={styles.details}>{this.state.email}</Text>

        <Text style={styles.children,styles.detailsCaption}>Phoneno</Text>
    		<Text style={styles.details}>{this.state.phoneNo}</Text>

        <Text style={styles.children,styles.detailsCaption}>Date of Birth</Text>
    		<Text style={styles.details}>{this.state.dob}</Text>
      </View>
        
    

    );
  }


}