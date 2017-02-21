Object.defineProperty(exports,"__esModule",{value:true});
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactRedux=require('react-redux');
var _reactNative=require('react-native');var _reactNative2=babelHelpers.interopRequireDefault(_reactNative);
var _actions=require('../../actions');
var _redux=require('redux');






var _bookGridView=require('../../components/bookGridView');var _bookGridView2=babelHelpers.interopRequireDefault(_bookGridView);

var api=require('../../data/books.json');var

BookListingPageView=function(_Component){babelHelpers.inherits(BookListingPageView,_Component);function BookListingPageView(){babelHelpers.classCallCheck(this,BookListingPageView);return babelHelpers.possibleConstructorReturn(this,(BookListingPageView.__proto__||Object.getPrototypeOf(BookListingPageView)).apply(this,arguments));}babelHelpers.createClass(BookListingPageView,[{key:'onSignUp',value:function onSignUp()

{
this.props.gotoSignUpPage({key:'Signup',index:1});
}},{key:'onLoginPress',value:function onLoginPress()

{
this.props.navigator.push({key:'BooksTabs',index:2});
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.View,{style:{flex:1,backgroundColor:'#ffffff'}},
_react2.default.createElement(_bookGridView2.default,{dataSource:api.result})));


}}]);return BookListingPageView;}(_react.Component);

function mapDispatchToProps(dispatch){
return(0,_redux.bindActionCreators)(_actions.ActionCreators,dispatch);
}

function mapStateToProps(state){
return{
navigationState:state.navigationState};

}exports.default=

(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(BookListingPageView);