Object.defineProperty(exports,"__esModule",{value:true});
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _reactNative=require('react-native');var _reactNative2=babelHelpers.interopRequireDefault(_reactNative);
var _actions=require('../actions');
var _redux=require('redux');
var _styles=require('../styles');var _styles2=babelHelpers.interopRequireDefault(_styles);var

ScrollView=_reactNative2.default.ScrollView,
View=_reactNative2.default.View,
TextInput=_reactNative2.default.TextInput,
Image=_reactNative2.default.Image,
Text=_reactNative2.default.Text,
TouchableHighlight=_reactNative2.default.TouchableHighlight,
StyleSheet=_reactNative2.default.StyleSheet;var


Signin=function(_Component){babelHelpers.inherits(Signin,_Component);function Signin(){babelHelpers.classCallCheck(this,Signin);return babelHelpers.possibleConstructorReturn(this,(Signin.__proto__||Object.getPrototypeOf(Signin)).apply(this,arguments));}babelHelpers.createClass(Signin,[{key:'onSignUp',value:function onSignUp()

{
this.props.gotoSignUpPage({key:'Signup',index:1});
}},{key:'render',value:function render()


{var _this2=this;
console.log('@1 Signin'+this.props);
return(
_react2.default.createElement(View,{style:_styles2.default.container},
_react2.default.createElement(Text,{style:_styles2.default.welcome},'Welcome to Picture Book'),


_react2.default.createElement(TouchableHighlight,{onPress:function onPress(){_this2.onSignUp();}},
_react2.default.createElement(Text,{style:_styles2.default.welcome},'Login')),




_react2.default.createElement(TouchableHighlight,null,
_react2.default.createElement(Text,{style:_styles2.default.welcome},'New  User ? Sign up here'))));






}}]);return Signin;}(_react.Component);


function mapDispatchToProps(dispatch){
return(0,_redux.bindActionCreators)(_actions.ActionCreators,dispatch);
}

function mapStateToProps(state){
return{
navigationState:state.navigationState};

}exports.default=


(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(Signin);