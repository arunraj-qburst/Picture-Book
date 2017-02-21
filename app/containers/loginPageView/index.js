
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

import Button from 'react-native-button';
import loginstyle from './styles';

class LoginPageView extends Component { 

 onSignUp(){
    //this.props.gotoSignUpPage({ key: 'Signup',index:1});
       this.props.navigator.push({ key: 'Signup',index:1});
  }
  onLoginPress(){
     // this.setState({ key: 'BooksTabs',index:2});
    //this.props.onLogin({ key: 'BooksTabs',index:2});
    

   // if (route.index === 0) {
            this.props.navigator.push({ key: 'BooksTabs',index:2});//.routes[1]);
        //  } else {
        //   navigator.pop();
        // }
  }

  render() {
    return (
      <View style={{flex:1}}>

       <View style={loginstyle.logoWrapper}> 
        <Text style ={loginstyle.logo}>Picture Book</Text>
       </View>
       
       <View style ={loginstyle.bodyWrapper}> 

           <View  > 
              <TextInput
                placeholder="username"
              />
               <TextInput placeholder="password"/>
              <Button 
                onPress={()=>{this.onLoginPress()}} 
                style={loginstyle.defaultButton}
              >Login</Button>
          </View> 

           <View style={loginstyle.signUpWrapper}> 
              <Text style={loginstyle.register}  onPress={()=>{this.onSignUp()}}  >Register</Text>
              <Text style={loginstyle.forgotPassword}>Forgot Password</Text>
           </View> 

        </View>

      </View>
    );
  }
}  
 function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
 
function mapStateToProps(state) {
  return { 
     navigationState: state.navigationState, 
  };
} 

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageView); 