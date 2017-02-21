import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative,{BackAndroid} from 'react-native';
import { ActionCreators } from '../../actions'
import { bindActionCreators } from 'redux'
import {
  StyleSheet,
  Text,
  View,
 TextInput,
 ScrollView
} from 'react-native';
import styles from './styles';
import Button from 'react-native-button';


class SignUpPageView extends Component {
constructor(props)
{
  super(props)
}
 onBackNavigation(){
   this. props.gotoPreviousScreen({ key: 'Login',index:0});
    
  }
componentDidMount() {
    BackAndroid.addEventListener('NAVIGATION_BACK', this.onBackNavigation);
  }
  componentWillUnmount() {
    BackAndroid.removeEventListener('NAVIGATION_BACK', this.onBackNavigation);
  }
onLogin()
{
  this.props.navigator.replace({ key: 'Login',index:0});
}

 
  render() {
    return (

    <ScrollView style={{flex:1, backgroundColor:'#ffe0cc',}}>


        <View style={styles.logoWrapper}>  
         <Text style={styles.logo}>Picture Book</Text>
        </View>  


        <View style={styles.bodyWrapper}>  
           <TextInput placeholder="First Name" style={styles.input} />
           <TextInput placeholder="Last Name" style={styles.input} />
           <TextInput placeholder="Password" style={styles.input}/>
           <TextInput placeholder="Password" style={styles.input} />
           
           
             <Button
                style={styles.defaultButton}
              >Register</Button>

              <View style={styles.signInWrapper}>  
              <Text style={styles.smallLinkTextsRight}  onPress={()=>{this.onLogin()}}  >Already Registered? Login</Text>
              
           </View>
        </View> 
    </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPageView); 