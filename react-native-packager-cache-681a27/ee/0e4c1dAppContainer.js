Object.defineProperty(exports,"__esModule",{value:true});
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');var _reactNative2=babelHelpers.interopRequireDefault(_reactNative);
var _reactRedux=require('react-redux');
var _redux=require('redux');
var _actions=require('../actions');









var _Signin=require('./Signin');var _Signin2=babelHelpers.interopRequireDefault(_Signin);
var _Signup=require('./Signup');var _Signup2=babelHelpers.interopRequireDefault(_Signup);var


NavigationPropTypes=_reactNative.NavigationExperimental.PropTypes,
NavigationStateUtils=_reactNative.NavigationExperimental.StateUtils,
NavigationCard=_reactNative.NavigationExperimental.Card,
NavigationTransitioner=_reactNative.NavigationExperimental.Transitioner;var



NavigationPagerStyleInterpolator=
NavigationCard.PagerStyleInterpolator;var


AppContainer=function(_Component){babelHelpers.inherits(AppContainer,_Component);

function AppContainer(props){babelHelpers.classCallCheck(this,AppContainer);var _this=babelHelpers.possibleConstructorReturn(this,(AppContainer.__proto__||Object.getPrototypeOf(AppContainer)).call(this,
props));

_this._render=_this._render.bind(_this);
_this._renderScene=_this._renderScene.bind(_this);

console.log('this.props.navigationState'+_this.props.navigationState.key);return _this;
}babelHelpers.createClass(AppContainer,[{key:'render',value:function render()










{
console.log('%%%%%%%this.props.navigationState'+this.props.navigationState.routes[0].key);
return(

_react2.default.createElement(NavigationTransitioner,{
navigationState:this.props.navigationState,
render:this._render}));


}},{key:'_render',value:function _render(

transitionProps){var _this2=this;

var scenes=transitionProps.scenes.map(function(scene){
console.log('SceneContainer @ scene  '+transitionProps.scene.key);
var sceneProps=babelHelpers.extends({},
transitionProps,{
scene:scene});

console.log('SceneContainer @ 1  ');
return _this2._renderScene(sceneProps);
});

return;
_react2.default.createElement(_reactNative.View,{style:{flex:1}},
scenes);

}},{key:'_renderScene',value:function _renderScene(

sceneProps){
console.log('SceneContainer @ 2  ');
return;

_react2.default.createElement(SceneContainer,babelHelpers.extends({},
sceneProps,{
key:sceneProps.scene.key}));


}}]);return AppContainer;}(_react.Component);var


SceneContainer=function(_Component2){babelHelpers.inherits(SceneContainer,_Component2);function SceneContainer(){babelHelpers.classCallCheck(this,SceneContainer);return babelHelpers.possibleConstructorReturn(this,(SceneContainer.__proto__||Object.getPrototypeOf(SceneContainer)).apply(this,arguments));}babelHelpers.createClass(SceneContainer,[{key:'render',value:function render()

{
console.log('SceneContainer'+this.props.scene.key);
var style=[
styles.scene,
NavigationPagerStyleInterpolator.forHorizontal(this.props)];

var Scene=_Signin2.default;





return(
_react2.default.createElement(_reactNative.Animated.View,{style:style},
_react2.default.createElement(Scene,babelHelpers.extends({},this.props,{style:style}))));


}}]);return SceneContainer;}(_react.Component);


var styles=_reactNative.StyleSheet.create({
scene:{

flex:1,
bottom:0,
left:0,
position:'absolute',
right:0,
top:0}});







function mapDispatchToProps(dispatch){
return(0,_redux.bindActionCreators)(_actions.ActionCreators,dispatch);
}

function mapStateToProps(state){
return{
navigationState:state.navigationState};

}exports.default=


(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(AppContainer);