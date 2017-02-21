
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
  
import LoginPageView from './loginPageView';
import SignupPageView from './registerPageView';
import BookList from './BookList';
const {
  PropTypes: NavigationPropTypes,
  StateUtils: NavigationStateUtils,
  Card: NavigationCard,
  CardStack: NavigationCardStack,
  Transitioner: NavigationTransitioner
} = NavigationExperimental;

const {
  PagerStyleInterpolator: NavigationPagerStyleInterpolator,
} = NavigationCard;

 
class AppRoute extends Component {
 
  constructor(props){//: any, context: any) {// 
    super(props);//, context);
    //this.state=this.props.navigationState; 
    this._renderScene = this._renderScene.bind(this); 
    this._handleBackAction = this._handleBackAction.bind(this);
  }
  //////////////////
_renderScene = (props) => {
   
     const {
      index,
      key,
      navigationState,
    } = props;
    
    switch(props.scene.route.key) {
      case 'Login':
        return <LoginPageView  {...this.props}  />
      case 'Signup':
        return <SignupPageView {...this.props} /> 
        case 'BooksTabs':
        return <BookList {...this.props} /> 
    }
  }
   _handleBackAction() {
    if (this.props.navigation.index === 0) {
      return false;
    }
    this.props.popRoute();
    return true;
  };
 
   render() {
    const { navigationState } = this.props.navigationState
    let direction = 'horizontal'
   /*  if (navigationState.prevPushedRoute && navigationState.prevPushedRoute.type === 'modal') {
      direction = 'vertical'
    } */
    return (
     /* <NavigationCardStack
        direction={direction}
        navigationState={this.props.navigationState}
        renderScene={this._renderScene}
      />*/
       <NavigationTransitioner
        navigationState={this.props.navigationState}
        render={this._renderScene}
      />
    )
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


export default connect(mapStateToProps, mapDispatchToProps)(AppRoute);

 