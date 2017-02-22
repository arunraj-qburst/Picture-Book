Object.defineProperty(exports,"__esModule",{value:true});
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');var _reactNative2=babelHelpers.interopRequireDefault(_reactNative);
var _reactRedux=require('react-redux');
var _redux=require('redux');
var _actions=require('../actions');










var _loginPageView=require('./loginPageView');var _loginPageView2=babelHelpers.interopRequireDefault(_loginPageView);
var _registerPageView=require('./registerPageView');var _registerPageView2=babelHelpers.interopRequireDefault(_registerPageView);
var _bookListingPageView=require('./bookListingPageView');var _bookListingPageView2=babelHelpers.interopRequireDefault(_bookListingPageView);
var _bookDetailPageView=require('./bookDetailPageView');var _bookDetailPageView2=babelHelpers.interopRequireDefault(_bookDetailPageView);var


NavigationPropTypes=_reactNative.NavigationExperimental.PropTypes,
NavigationStateUtils=_reactNative.NavigationExperimental.StateUtils,
NavigationCard=_reactNative.NavigationExperimental.Card,
NavigationCardStack=_reactNative.NavigationExperimental.CardStack,
NavigationTransitioner=_reactNative.NavigationExperimental.Transitioner;var



NavigationPagerStyleInterpolator=
NavigationCard.PagerStyleInterpolator;var


AppRoute=function(_Component){babelHelpers.inherits(AppRoute,_Component);function AppRoute(){var _ref;var _temp,_this,_ret;babelHelpers.classCallCheck(this,AppRoute);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=babelHelpers.possibleConstructorReturn(this,(_ref=AppRoute.__proto__||Object.getPrototypeOf(AppRoute)).call.apply(_ref,[this].concat(args))),_this),_this.








_renderSceneXXX=function(props){var


index=


props.index,key=props.key,navigationState=props.navigationState;

switch(props.scene.route.key){
case'Login':
return _react2.default.createElement(_loginPageView2.default,null);
case'Signup':
return _react2.default.createElement(_registerPageView2.default,null);
case'BooksTabs':
return _react2.default.createElement(_bookListingPageView2.default,null);}

},_this.




































_renderScene=function(props){








console.log('##########  route.key  '+props.scene.route.key);
switch(props.scene.route.key){
case'Login':
return _react2.default.createElement(_loginPageView2.default,null);
case'Signup':
return _react2.default.createElement(_registerPageView2.default,null);
case'BooksTabs':
return _react2.default.createElement(_bookListingPageView2.default,null);
case'BookDetail':
return _react2.default.createElement(_bookDetailPageView2.default,null);}



},_temp),babelHelpers.possibleConstructorReturn(_this,_ret);}babelHelpers.createClass(AppRoute,[{key:'_handleBackAction',value:function _handleBackAction(){if(this.props.navigation.index===0){return false;}this.props.popRoute();return true;}},{key:'render',value:function render(){var navigationState=this.props.navigationState.navigationState;var direction='horizontal';return _react2.default.createElement(NavigationCardStack,{direction:direction,navigationState:this.props.navigationState,renderScene:this._renderScene});}}]);return AppRoute;}(_react.Component);





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


(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(AppRoute);