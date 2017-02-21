'use strict';

var _reactNative=require('react-native');var React=require('react-native');

var WIDTH=_reactNative.Dimensions.get('window').width;
var HEIGHT=_reactNative.Dimensions.get('window').height;

var styles=React.StyleSheet.create({
gridWrapper:{
flexDirection:'row',
flexWrap:'wrap',
justifyContent:'space-around'}});



module.exports=styles;