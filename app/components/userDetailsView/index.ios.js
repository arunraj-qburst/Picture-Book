import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
  
} from 'react-native';

import styles from './styles';
export default class UserDetails extends Component {

// constructor(props) {
//   super(props);
//   this.state = this.props.data;
// }


  render() {
    return (

<View style={styles.container}>

      <View style={styles.mainDetailContainer}>

        
              <View style={styles.detailContainer}>
                <Text style={styles.details,styles.detailsCaption}>First Name</Text>
                <Text style={styles.details}>Anoop</Text>
              </View>  
              <View style={styles.detailContainer}>
                <Text style={styles.children,styles.detailsCaption}>LastName</Text>
                <Text style={styles.details}>Anil</Text>
              </View>
              <View style={styles.detailContainer}>
                      <Text style={styles.children,styles.detailsCaption}>Email</Text>
                      <Text style={styles.details}>anoopda@qburst.com</Text>
              </View>

      </View>


      <View style={styles.mainButtonContainer}>
              <Text>Change Password</Text>
             <TouchableOpacity style={styles.button}>      
                    <Text style={styles.buttonTxt} >Register</Text>
            </TouchableOpacity>
      </View>  



</View>
        
    

    );
  }


}