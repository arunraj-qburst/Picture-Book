
import React, { Component, PropTypes } from 'react' 
import ReactNative from 'react-native' 

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

import {
  Animated,
  StyleSheet,
  View,
  Text, TouchableHighlight,
  NavigationExperimental,
  Navigator
} from 'react-native';
  
import Signin from './Signin';
import Signup from './Signup';
//import BookList from './BookList';
const {
  PropTypes: NavigationPropTypes,
  StateUtils: NavigationStateUtils,
  Card: NavigationCard,
  Transitioner: NavigationTransitioner
} = NavigationExperimental;

const {
  PagerStyleInterpolator: NavigationPagerStyleInterpolator,
} = NavigationCard;

 
class AppNavigator extends Component {
 
  constructor(props){//: any, context: any) {// 
    super(props);//, context);
    //this.state=this.props.navigationState; 
    this._renderScene = this._renderScene.bind(this);
    //this.setState(this.props.navigationState ) 
  }
   
   

  render() {
   
     return (
    <Navigator
      initialRoute={this.props.navigationState}
      renderScene={this._renderScene}
    />
  );
  }
 
  _renderScene(route, navigator) {
   if(route.key=== 'Login')
   {  return (
      <Signin
        route={route} 
      />
    ); 
   }
   if(route.key=== 'Signup')
   {  return (
      <Signup
        route={route}
        
      />
    ); 
   }
  }
 
}
 

const styles = StyleSheet.create({
  scene: {
    
    flex: 1,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});


//////////////////////////////
//////////////////////////////
 
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);

 