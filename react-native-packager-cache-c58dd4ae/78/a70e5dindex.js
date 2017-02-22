'use strict';Object.defineProperty(exports,"__esModule",{value:true});


var _reactRedux=require('react-redux');
var _reactNative=require('react-native');var _reactNative2=babelHelpers.interopRequireDefault(_reactNative);
var _actions=require('../../actions');
var _redux=require('redux');

var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _bookGridItem=require('../bookGridItem');var _bookGridItem2=babelHelpers.interopRequireDefault(_bookGridItem);


var styles=require('./styles.js');var
array=_react.PropTypes.array;var

GridViewLayout=function(_Component){babelHelpers.inherits(GridViewLayout,_Component);

function GridViewLayout(props){babelHelpers.classCallCheck(this,GridViewLayout);var _this=babelHelpers.possibleConstructorReturn(this,(GridViewLayout.__proto__||Object.getPrototypeOf(GridViewLayout)).call(this,
props));_this.





onSelect=function(){
console.log('on select prss');
_this.props.onBookDetail({key:'BookDetail',index:3});
};_this.

renderGridItem=function(book){
console.log('In renderGridItem');var
title=book.title,author=book.author,type=book.type,price=book.price;

return _react2.default.createElement(_bookGridItem2.default,{
title:title,
author:author,
onPress:_this.onSelect,
type:type,
price:price});

};var ds=new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});_this.state={dataSource:ds.cloneWithRows(_this.props.dataSource)};return _this;}babelHelpers.createClass(GridViewLayout,[{key:'render',value:function render()

{var _this2=this;

return _react2.default.createElement(_reactNative.ListView,{contentContainerStyle:styles.gridWrapper,
dataSource:this.state.dataSource,
renderRow:function renderRow(gridItem){return _this2.renderGridItem(gridItem);}});


}}]);return GridViewLayout;}(_react.Component);


GridViewLayout.propTypes={
dataSource:array};




function mapDispatchToProps(dispatch){
return(0,_redux.bindActionCreators)(_actions.ActionCreators,dispatch);
}

function mapStateToProps(state){
return{
navigationState:state.navigationState};

}exports.default=

(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(GridViewLayout);