
import React, { Component } from 'react';
import style from './styles';
import profilePic from '../../images/profilePic.jpg';
import Header from '../../components/toolBarProfile/index';
import UserDetails from '../../components/userDetailsView/index';
import UserProfileInput from '../../components/userProfileInputView/index';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button
} from 'react-native';

export default class UserProfile extends Component {

constructor(props) {
  super(props);
  var count =0;
  this.state = {

    email:"anoopda@qburst,com",
    phoneNo:"0471-2742218",
    dob:"12 March 1994",
    status:false,
    user:"Anoop D Anil"
  };
  this.save = this.save.bind(this);
  this.check = this.check.bind(this);

}

edit(){
    this.setState({ status:true})
}

save(emailData,phoneNoData,dobDate){

this.setState({email:emailData, phoneNo:phoneNoData, dob: dobDate,status:false})

}


check(){

  if(!this.state.status){
         return <UserDetails data= {this.state} />
  }


  else{

      return <UserProfileInput save= {this.save.bind(this)}/>

  }

}

  render() {
    return (

    <ScrollView style = {style.mainWrapper}>    
         <Header edit={this.edit.bind(this)} data={this.state}/>
          <View style= {style.profileWrapper}> 
                <View style ={ style.profileImageWrapper} >
                  <Image source = { profilePic } style ={style.profileImage} blurRadius={1}/>
                </View>
          </View>

           { this.check()}           
    </ScrollView>      

    );
  }
}

