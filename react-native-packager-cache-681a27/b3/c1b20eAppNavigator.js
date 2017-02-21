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


AppNavigator=function(_Component){babelHelpers.inherits(AppNavigator,_Component);

function AppNavigator(props){babelHelpers.classCallCheck(this,AppNavigator);var _this=babelHelpers.possibleConstructorReturn(this,(AppNavigator.__proto__||Object.getPrototypeOf(AppNavigator)).call(this,
props));

_this._renderScene=_this._renderScene.bind(_this);return _this;

}babelHelpers.createClass(AppNavigator,[{key:'render',value:function render()



{

return(
_react2.default.createElement(_reactNative.Navigator,{
initialRoute:this.props.navigationState,
renderScene:this._renderScene}));


}},{key:'_renderScene',value:function _renderScene(

route,navigator){
if(route.key==='Login')
{return(
_react2.default.createElement(_Signin2.default,{
route:route}));


}
if(route.key==='Signup')
{return(
_react2.default.createElement(_Signup2.default,{
route:route}));



}
}}]);return AppNavigator;}(_react.Component);




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


(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(AppNavigator);