'use strict';Object.defineProperty(exports,"__esModule",{value:true});


var _reactRedux=require('react-redux');
var _reactNative=require('react-native');var _reactNative2=babelHelpers.interopRequireDefault(_reactNative);
var _actions=require('../../actions');
var _redux=require('redux');

var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _BookDetailViewStatusBar=require('../../components/BookDetailViewStatusBar');var _BookDetailViewStatusBar2=babelHelpers.interopRequireDefault(_BookDetailViewStatusBar);







var styles=require('./styles.js');var
string=_react.PropTypes.string,number=_react.PropTypes.number,oneOf=_react.PropTypes.oneOf,bool=_react.PropTypes.bool;var

BookDetailVeiw=function(_Component){babelHelpers.inherits(BookDetailVeiw,_Component);function BookDetailVeiw(){babelHelpers.classCallCheck(this,BookDetailVeiw);return babelHelpers.possibleConstructorReturn(this,(BookDetailVeiw.__proto__||Object.getPrototypeOf(BookDetailVeiw)).apply(this,arguments));}babelHelpers.createClass(BookDetailVeiw,[{key:'render',value:function render()

{
console.log('this.props.bookData'+this.props.navigationState);var _props$bookData=






this.props.bookData,title=_props$bookData.title,author=_props$bookData.author,coverImageUrl=_props$bookData.coverImageUrl,titleImageUrl=_props$bookData.titleImageUrl,price=_props$bookData.price;

return(
_react2.default.createElement(_reactNative.ScrollView,null,
_react2.default.createElement(_BookDetailViewStatusBar2.default,{
title:title,
author:author,
coverImageUrl:coverImageUrl,
titleImageUrl:titleImageUrl,
price:price,
purchased:false}),

_react2.default.createElement(_reactNative.View,{style:styles.description},
_react2.default.createElement(_reactNative.Text,null,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'))));


















}}]);return BookDetailVeiw;}(_react.Component);


BookDetailVeiw.propTypes={
title:string,
author:string,
coverImageUrl:string,
titleImageUrl:string,
price:number,
purchased:bool};



function mapDispatchToProps(dispatch){
return(0,_redux.bindActionCreators)(_actions.ActionCreators,dispatch);
}

function mapStateToProps(state){
return{
navigationState:state.navigationState};

}exports.default=

(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(BookDetailVeiw);