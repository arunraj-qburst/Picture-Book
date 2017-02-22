Object.defineProperty(exports,"__esModule",{value:true});exports.











push=push;exports.





pop=pop;exports.






onBookDetail=onBookDetail;var _types=require('./types');var types=babelHelpers.interopRequireWildcard(_types);var _reactNative=require('react-native');var _reactNative2=babelHelpers.interopRequireDefault(_reactNative);function push(route){return{type:types.NAVIGATION_PUSH,route:route};}function pop(){return{type:types.NAVIGATION_POP};}function onBookDetail(route){

route.bookData=
{title:"Book Title here",
author:"Hrishikesh",
price:"58"};

return function(dispatch,getState){
dispatch({
type:types.NAVIGATION_PUSH,
route:route});

};}