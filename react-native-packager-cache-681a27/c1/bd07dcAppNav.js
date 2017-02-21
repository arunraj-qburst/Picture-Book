Object.defineProperty(exports,"__esModule",{value:true});
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');var _reactNative2=babelHelpers.interopRequireDefault(_reactNative);
var _reactRedux=require('react-redux');
var _redux=require('redux');
var _actions=require('../actions');









var _Signin=require('./Signin');var _Signin2=babelHelpers.interopRequireDefault(_Signin);
var _Signup=require('./Signup');var _Signup2=babelHelpers.interopRequireDefault(_Signup);
var _BookList=require('./BookList');var _BookList2=babelHelpers.interopRequireDefault(_BookList);var


NavigationPropTypes=_reactNative.NavigationExperimental.PropTypes,
NavigationStateUtils=_reactNative.NavigationExperimental.StateUtils,
NavigationCard=_reactNative.NavigationExperimental.Card,
NavigationTransitioner=_reactNative.NavigationExperimental.Transitioner;var



NavigationPagerStyleInterpolator=
NavigationCard.PagerStyleInterpolator;var


AppNav=function(_Component){babelHelpers.inherits(AppNav,_Component);

function AppNav(props,context){babelHelpers.classCallCheck(this,AppNav);return babelHelpers.possibleConstructorReturn(this,(AppNav.__proto__||Object.getPrototypeOf(AppNav)).call(this,
props,context));




}babelHelpers.createClass(AppNav,[{key:'render',value:function render()


{
return(
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_react.Navigator,{
initialRoute:{key:'Login'},
renderScene:this.navigatorRenderScene})));


}},{key:'navigatorRenderScene',value:function navigatorRenderScene(

route,navigator){
_navigator=navigator;
switch(route.key){
case'Login':
return _react2.default.createElement(_Signin2.default,{navigator:navigator,title:'first'});
case'Signup':
return _react2.default.createElement(_Signup2.default,{navigator:navigator,title:'second'});
case'BooksTabs':
return _react2.default.createElement(_BookList2.default,{navigator:navigator,title:'second'});}

}}]);return AppNav;}(_react.Component);







function mapDispatchToProps(dispatch){
return(0,_redux.bindActionCreators)(_actions.ActionCreators,dispatch);
}

function mapStateToProps(state){
return{
navigationState:state.navigationState};

}exports.default=
(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(AppNav);