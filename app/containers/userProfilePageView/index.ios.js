
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

// constructor(props) {
//   super(props);
//   var count =0;
//   this.state = {

//     email:"anoopda@qburst.com",
//     phoneNo:"0471-2742218",
//     dob:"12 March 1994",
//     status:false,
//     user:"Anoop D Anil"
//   };
//   // this.save = this.save.bind(this);
//   // this.check = this.check.bind(this);

// }

// edit(){
//     this.setState({ status:true})
// }

// save(emailData,phoneNoData,dobDate){

// this.setState({email:emailData, phoneNo:phoneNoData, dob: dobDate,status:false})

// }


// check(){

//   if(!this.state.status){
//          return <UserDetails data= {this.state} />
//   }


//   else{

//       return <UserProfileInput save= {this.save.bind(this)}/>

//   }

// }

  render() {
    return (

    <View style={style.container}>
          <UserDetails/>
    </View>      

    );
  }
}

