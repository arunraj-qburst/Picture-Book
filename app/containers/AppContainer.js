
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
  NavigationExperimental
} from 'react-native';
  
import Signin from './Signin';
import Signup from './Signup';
//import BookList from './BookList';
const {
  PropTypes: NavigationPropTypes,
  StateUtils: NavigationStateUtils,
  Card: NavigationCard,
  Transitioner: NavigationTransitioner,
} = NavigationExperimental;

const {
  PagerStyleInterpolator: NavigationPagerStyleInterpolator,
} = NavigationCard;

 
class AppContainer extends Component {
 
  constructor(props){//: any, context: any) {// 
    super(props);//, context);
    //this.state=this.props.navigationState;
    this._render = this._render.bind(this);
    this._renderScene = this._renderScene.bind(this);
    //this.setState(this.props.navigationState )
   console.log('this.props.navigationState'+this.props.navigationState.key);
  }
   
   /*
 constructor(props) {
		super(props);
		this.state = {
			index: 0,
		};
	}
 */ 

  render() {
     console.log('%%%%%%%this.props.navigationState'+this.props.navigationState.routes[0].key);
   return (
    /* <Signin />*/
      <NavigationTransitioner
        navigationState={this.props.navigationState}
        render={this._render}
      />
    );
  }

  _render(transitionProps) {
   
    const scenes = transitionProps.scenes.map((scene) => {
       console.log('SceneContainer @ scene  '+transitionProps.scene.key);
      const sceneProps = {
        ...transitionProps,
        scene,
      };
       console.log('SceneContainer @ 1  ' );
      return this._renderScene(sceneProps);
    });

    return 
      (<View style={ { flex: 1 } }>
        {scenes}
      </View>)
  }

  _renderScene(sceneProps) {
     console.log('SceneContainer @ 2  ' );
    return  
    /* ( <Signin {...this.props} />)*/
     ( <SceneContainer
        {...sceneProps}
        key={sceneProps.scene.key}
      />)
     
  }
}

class SceneContainer extends Component {

  render() {
console.log('SceneContainer'+this.props.scene.key);
    const style = [
      styles.scene,
      NavigationPagerStyleInterpolator.forHorizontal(this.props),
    ];
    let Scene = Signin;//null;
      
    //if (this.props.scene.route.key === 'Login') { Scene = Signin }
   // if (this.props.scene.route.key === 'Signup') { Scene = Signup }
   // if (this.props.scene.route.key === 'BooksTabs') { Scene = BookList }
     
    return  (
      <Animated.View style={style}>
        <Scene {...this.props} style={style} />
      </Animated.View>
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


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

 