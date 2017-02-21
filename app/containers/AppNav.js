
import React, { Component, PropTypes,Navigator } from 'react' 
import ReactNative from 'react-native' 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

import {
  Animated,
  StyleSheet,
  View,
  Text, TouchableHighlight,
  NavigationExperimental
} from 'react-native';
  
import Signin from './Signin';
import Signup from './Signup';
import BookList from './BookList';
//import styles from './styles';
const {
  PropTypes: NavigationPropTypes,
  StateUtils: NavigationStateUtils,
  Card: NavigationCard,
  Transitioner: NavigationTransitioner,
} = NavigationExperimental;

const {
  PagerStyleInterpolator: NavigationPagerStyleInterpolator,
} = NavigationCard;

 
class AppNav extends Component {
 
  constructor(props: any, context: any) {// 
    super(props, context);
    //this.navigatorRenderScene = this.navigatorRenderScene.bind(this);
    //this._renderScene = this._renderScene.bind(this);
//  // style={styles.container}
    
  };
 

   render() {
    return ( 
     <View>
      <Navigator 
        initialRoute= {{key:'Login'}}
        renderScene={this.navigatorRenderScene} />
        </View>
    ); 
   }

   navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.key) {
      case 'Login':
        return <Signin navigator={navigator} title="first" />;
      case 'Signup':
        return <Signup navigator={navigator} title="second" />;
         case 'BooksTabs':
        return <BookList navigator={navigator} title="second" />; 
    }
  }
 
	  
}
  

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
export default connect(mapStateToProps, mapDispatchToProps)(AppNav);

 