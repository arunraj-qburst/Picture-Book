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


BookList=function(_Component){babelHelpers.inherits(BookList,_Component);
function BookList(props)
{babelHelpers.classCallCheck(this,BookList);return babelHelpers.possibleConstructorReturn(this,(BookList.__proto__||Object.getPrototypeOf(BookList)).call(this,
props));
}babelHelpers.createClass(BookList,[{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(View,{style:_styles2.default.container},
_react2.default.createElement(Text,{style:_styles2.default.welcome},'Welcome User'),



_react2.default.createElement(Text,{style:_styles2.default.welcome},'This is Book list page'),



_react2.default.createElement(TouchableHighlight,{onPress:function onPress(){_this2.props.onLogout();}},
_react2.default.createElement(Text,{style:_styles2.default.welcome},'Logout'))));






}}]);return BookList;}(_react.Component);




function mapStateToProps(state){
return{
navigationState:state.navigationState};

}

function mapDispatchToProps(dispatch){
return(0,_redux.bindActionCreators)(_actions.ActionCreators,dispatch);
}exports.default=

(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(BookList);