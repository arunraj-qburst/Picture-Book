Object.defineProperty(exports,"__esModule",{value:true});
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');var _reactNative2=babelHelpers.interopRequireDefault(_reactNative);
var _reactRedux=require('react-redux');
var _redux=require('redux');
var _actions=require('../actions');










var _loginPageView=require('./loginPageView');var _loginPageView2=babelHelpers.interopRequireDefault(_loginPageView);
var _registerPageView=require('./registerPageView');var _registerPageView2=babelHelpers.interopRequireDefault(_registerPageView);
var _BookList=require('./BookList');var _BookList2=babelHelpers.interopRequireDefault(_BookList);var

NavigationPropTypes=_reactNative.NavigationExperimental.PropTypes,
NavigationStateUtils=_reactNative.NavigationExperimental.StateUtils,
NavigationCard=_reactNative.NavigationExperimental.Card,
NavigationCardStack=_reactNative.NavigationExperimental.CardStack,
NavigationTransitioner=_reactNative.NavigationExperimental.Transitioner;var



NavigationPagerStyleInterpolator=
NavigationCard.PagerStyleInterpolator;var


AppRoute=function(_Component){babelHelpers.inherits(AppRoute,_Component);

function AppRoute(props){babelHelpers.classCallCheck(this,AppRoute);var _this=babelHelpers.possibleConstructorReturn(this,(AppRoute.__proto__||Object.getPrototypeOf(AppRoute)).call(this,
props));_initialiseProps.call(_this);

_this._renderScene=_this._renderScene.bind(_this);
_this._handleBackAction=_this._handleBackAction.bind(_this);return _this;
}babelHelpers.createClass(AppRoute,[{key:'_handleBackAction',value:function _handleBackAction()


















{
if(this.props.navigation.index===0){
return false;
}
this.props.popRoute();
return true;
}},{key:'render',value:function render()

{var
navigationState=this.props.navigationState.navigationState;
var direction='horizontal';



return(





_react2.default.createElement(NavigationTransitioner,{
navigationState:this.props.navigationState,
render:this._renderScene}));


}}]);return AppRoute;}(_react.Component);var _initialiseProps=function _initialiseProps(){var _this2=this;this._renderScene=function(props){var index=props.index,key=props.key,navigationState=props.navigationState;switch(props.scene.route.key){case'Login':return _react2.default.createElement(_loginPageView2.default,_this2.props);case'Signup':return _react2.default.createElement(_registerPageView2.default,_this2.props);case'BooksTabs':return _react2.default.createElement(_BookList2.default,_this2.props);}};};






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