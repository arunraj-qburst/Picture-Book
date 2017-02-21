
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { ActionCreators } from '../actions'
import { bindActionCreators } from 'redux'
import styles from '../styles';
const {
  ScrollView,
  View,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
} = ReactNative;

class BookList extends Component {
   constructor(props)
   {
     super(props)
   }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome User
        </Text>
        
          <Text style={styles.welcome}>
         This is Book list page
        </Text>  

         <TouchableHighlight onPress={ () => { this.props.onLogout() } } >
          <Text style={styles.welcome}>
          Logout
        </Text>
        </TouchableHighlight>

      </View>
    );
  }//render() ends
}
 
 

function mapStateToProps(state) {
  return { 
    navigationState: state.navigationState, 
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//export default connect(mapStateToProps)(Signin);
 