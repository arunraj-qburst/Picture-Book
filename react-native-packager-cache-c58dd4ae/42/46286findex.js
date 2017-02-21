Object.defineProperty(exports,"__esModule",{value:true});
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _reactNative=require('react-native');var _reactNative2=babelHelpers.interopRequireDefault(_reactNative);
var _actions=require('../../actions');
var _redux=require('redux');






var _reactNativeButton=require('react-native-button');var _reactNativeButton2=babelHelpers.interopRequireDefault(_reactNativeButton);
var _styles=require('./styles');var _styles2=babelHelpers.interopRequireDefault(_styles);var

LoginPageView=function(_Component){babelHelpers.inherits(LoginPageView,_Component);function LoginPageView(){babelHelpers.classCallCheck(this,LoginPageView);return babelHelpers.possibleConstructorReturn(this,(LoginPageView.__proto__||Object.getPrototypeOf(LoginPageView)).apply(this,arguments));}babelHelpers.createClass(LoginPageView,[{key:'onSignUp',value:function onSignUp()

{

this.props.navigator.push({key:'Signup',index:1});
}},{key:'onLoginPress',value:function onLoginPress()
{





this.props.navigator.push({key:'BooksTabs',index:2});



}},{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(_reactNative.View,{style:{flex:1}},

_react2.default.createElement(_reactNative.View,{style:_styles2.default.logoWrapper},
_react2.default.createElement(_reactNative.Text,{style:_styles2.default.logo},'Picture Book')),


_react2.default.createElement(_reactNative.View,{style:_styles2.default.bodyWrapper},

_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.TextInput,{
placeholder:'username'}),

_react2.default.createElement(_reactNative.TextInput,{placeholder:'password'}),
_react2.default.createElement(_reactNativeButton2.default,{
onPress:function onPress(){_this2.onLoginPress();},
style:_styles2.default.defaultButton},'Login')),



_react2.default.createElement(_reactNative.View,{style:_styles2.default.signUpWrapper},
_react2.default.createElement(_reactNative.Text,{style:_styles2.default.register,onPress:function onPress(){_this2.onSignUp();}},'Register'),
_react2.default.createElement(_reactNative.Text,{style:_styles2.default.forgotPassword},'Forgot Password')))));






}}]);return LoginPageView;}(_react.Component);

function mapDispatchToProps(dispatch){
return(0,_redux.bindActionCreators)(_actions.ActionCreators,dispatch);
}

function mapStateToProps(state){
return{
navigationState:state.navigationState};

}exports.default=

(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(LoginPageView);