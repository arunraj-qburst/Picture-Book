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


Signup=function(_Component){babelHelpers.inherits(Signup,_Component);function Signup(){babelHelpers.classCallCheck(this,Signup);return babelHelpers.possibleConstructorReturn(this,(Signup.__proto__||Object.getPrototypeOf(Signup)).apply(this,arguments));}babelHelpers.createClass(Signup,[{key:'render',value:function render()

{
return(
_react2.default.createElement(View,{style:_styles2.default.container},
_react2.default.createElement(Text,{style:_styles2.default.welcome},'New User? Sign  Up here'),


_react2.default.createElement(TouchableHighlight,null,
_react2.default.createElement(Text,{style:_styles2.default.welcome},'Register')),



_react2.default.createElement(Text,{style:_styles2.default.instructions},'Aready Registered ?'),


_react2.default.createElement(TouchableHighlight,null,
_react2.default.createElement(Text,{style:_styles2.default.welcome},'Sign in'))));





}}]);return Signup;}(_react.Component);




function mapStateToProps(state){
return{
navigationState:state.navigationState};

}

function mapDispatchToProps(dispatch){
return(0,_redux.bindActionCreators)(_actions.ActionCreators,dispatch);
}exports.default=


(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(Signup);