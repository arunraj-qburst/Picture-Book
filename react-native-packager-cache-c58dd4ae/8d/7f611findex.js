'use strict';Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');

var styles=require('./styles.js');var

string=_react.PropTypes.string,number=_react.PropTypes.number,oneOf=_react.PropTypes.oneOf;var

PBGridItem=function(_Component){babelHelpers.inherits(PBGridItem,_Component);function PBGridItem(){babelHelpers.classCallCheck(this,PBGridItem);return babelHelpers.possibleConstructorReturn(this,(PBGridItem.__proto__||Object.getPrototypeOf(PBGridItem)).apply(this,arguments));}babelHelpers.createClass(PBGridItem,[{key:'onSelect',value:function onSelect()

{
this.props.onPress();
}},{key:'render',value:function render()
{var _this2=this;var _props=
this.props,title=_props.title,author=_props.author,type=_props.type,price=_props.price;

return(
_react2.default.createElement(_reactNative.View,{style:styles.itemWrapper},
_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:function onPress(){_this2.onSelect();}},
_react2.default.createElement(_reactNative.View,{style:styles.itemContainer},
type=='bundle'?_react2.default.createElement(_reactNative.Text,{style:styles.badge},'B'):null,
_react2.default.createElement(_reactNative.Text,{style:styles.bookTitle},title),
_react2.default.createElement(_reactNative.Text,{style:styles.bookAuthor},author),
_react2.default.createElement(_reactNative.Image,{
source:require('../../images/sample1.png'),
style:styles.thumbnail}),

_react2.default.createElement(_reactNative.Text,{style:styles.bookPrice},'E',price)))));




}}]);return PBGridItem;}(_react.Component);exports.default=PBGridItem;


PBGridItem.propTypes={
title:string,
author:string,
price:number,
thumbnailImageUrl:string,
type:oneOf(['book','bundle'])};