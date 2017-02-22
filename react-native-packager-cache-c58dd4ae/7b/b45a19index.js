'use strict';Object.defineProperty(exports,"__esModule",{value:true});
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');





var _reactNativeButton=require('react-native-button');var _reactNativeButton2=babelHelpers.interopRequireDefault(_reactNativeButton);

var styles=require('./styles.js');var
string=_react.PropTypes.string,number=_react.PropTypes.number,bool=_react.PropTypes.bool;var

BookDetailViewStatusBar=function(_Component){babelHelpers.inherits(BookDetailViewStatusBar,_Component);function BookDetailViewStatusBar(){babelHelpers.classCallCheck(this,BookDetailViewStatusBar);return babelHelpers.possibleConstructorReturn(this,(BookDetailViewStatusBar.__proto__||Object.getPrototypeOf(BookDetailViewStatusBar)).apply(this,arguments));}babelHelpers.createClass(BookDetailViewStatusBar,[{key:'render',value:function render()
{var _props=






this.props,title=_props.title,author=_props.author,titleImageUrl=_props.titleImageUrl,coverImageUrl=_props.coverImageUrl,price=_props.price,purchased=_props.purchased;
var buttonProps={
containerStyle:styles.titleButtonContainer,
style:styles.titleButton};

var buttonRail=purchased?_react2.default.createElement(_reactNative.View,{style:styles.titleButtonWrapper},
_react2.default.createElement(_reactNativeButton2.default,buttonProps,'Read')):

_react2.default.createElement(_reactNative.View,{style:styles.titleButtonWrapper},
_react2.default.createElement(_reactNativeButton2.default,buttonProps,'Buy'),
_react2.default.createElement(_reactNativeButton2.default,buttonProps,'Preview'));

var priceText=purchased?null:
_react2.default.createElement(_reactNative.Text,{style:styles.bookPrice},'E ',price);

return(
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.Image,{
source:require('../../images/sample1.png'),
style:styles.coverImage}),

_react2.default.createElement(_reactNative.Image,{
source:require('../../images/noddy.jpg'),
style:styles.titleImage}),

_react2.default.createElement(_reactNative.View,{style:styles.titleBar},
_react2.default.createElement(_reactNative.Text,{style:styles.bookTitle},title),
_react2.default.createElement(_reactNative.Text,{style:styles.bookAuthor},'by ',author),
priceText),

buttonRail));


}}]);return BookDetailViewStatusBar;}(_react.Component);exports.default=BookDetailViewStatusBar;


BookDetailViewStatusBar.propTypes={
title:string,
author:string,
titleImageUrl:string,
coverImageUrl:string,
price:number,
purchased:bool};