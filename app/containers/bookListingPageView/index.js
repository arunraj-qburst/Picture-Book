
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { ActionCreators } from '../../actions'
import { bindActionCreators } from 'redux'
import {
  View,
  Text,
  TextInput
} from 'react-native';
 
import GridViewLayout from '../../components/bookGridView';

const api = require('../../data/books.json')

class BookListingPageView extends Component { 

 onSignUp(){
    this.props.gotoSignUpPage({ key: 'Signup' });
  }

  onLoginPress(){
    this.props.navigator.push({ key: 'BooksTabs' });//.routes[1]);  
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'#ffffff'}}>
        <GridViewLayout dataSource={api.result} />
      </View>
    );
  }
}  

// Redux part //
 function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
 
function mapStateToProps(state) {
  return { 
     navigationState: state.navigationState, 
  };
} 

export default connect(mapStateToProps, mapDispatchToProps)(BookListingPageView); 