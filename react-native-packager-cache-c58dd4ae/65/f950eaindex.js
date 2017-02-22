Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _reactNative=require('react-native');var _reactNative2=babelHelpers.interopRequireDefault(_reactNative);
var _actions=require('../../actions');
var _redux=require('redux');







var _styles=require('./styles');var _styles2=babelHelpers.interopRequireDefault(_styles);
var _reactNativeButton=require('react-native-button');var _reactNativeButton2=babelHelpers.interopRequireDefault(_reactNativeButton);var


SignUpPageView=function(_Component){babelHelpers.inherits(SignUpPageView,_Component);
function SignUpPageView(props)
{babelHelpers.classCallCheck(this,SignUpPageView);return babelHelpers.possibleConstructorReturn(this,(SignUpPageView.__proto__||Object.getPrototypeOf(SignUpPageView)).call(this,
props));
}babelHelpers.createClass(SignUpPageView,[{key:'onBackNavigation',value:function onBackNavigation()
{

this.props.push({key:'BooksTabs',index:2});

}},{key:'componentDidMount',value:function componentDidMount()
{
_reactNative.BackAndroid.addEventListener('NAVIGATION_BACK',this.onBackNavigation);
}},{key:'componentWillUnmount',value:function componentWillUnmount()
{
_reactNative.BackAndroid.removeEventListener('NAVIGATION_BACK',this.onBackNavigation);
}},{key:'onLogin',value:function onLogin()

{

this.props.push({key:'Login',index:0});
}},{key:'render',value:function render()


{var _this2=this;
return(

_react2.default.createElement(_reactNative.ScrollView,{style:{flex:1,backgroundColor:'#ffe0cc'}},


_react2.default.createElement(_reactNative.View,{style:_styles2.default.logoWrapper},
_react2.default.createElement(_reactNative.Text,{style:_styles2.default.logo},'Picture Book')),



_react2.default.createElement(_reactNative.View,{style:_styles2.default.bodyWrapper},
_react2.default.createElement(_reactNative.TextInput,{placeholder:'First Name',style:_styles2.default.input}),
_react2.default.createElement(_reactNative.TextInput,{placeholder:'Last Name',style:_styles2.default.input}),
_react2.default.createElement(_reactNative.TextInput,{placeholder:'Password',style:_styles2.default.input}),
_react2.default.createElement(_reactNative.TextInput,{placeholder:'Password',style:_styles2.default.input}),


_react2.default.createElement(_reactNativeButton2.default,{
style:_styles2.default.defaultButton},'Register'),


_react2.default.createElement(_reactNative.View,{style:_styles2.default.signInWrapper},
_react2.default.createElement(_reactNative.Text,{style:_styles2.default.smallLinkTextsRight,onPress:function onPress(){_this2.onLogin();}},'Already Registered? Login')))));





}}]);return SignUpPageView;}(_react.Component);




function mapDispatchToProps(dispatch){
return(0,_redux.bindActionCreators)(_actions.ActionCreators,dispatch);
}

function mapStateToProps(state){
return{
navigationState:state.navigationState};

}exports.default=

(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(SignUpPageView);