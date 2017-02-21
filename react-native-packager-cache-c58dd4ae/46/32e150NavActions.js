Object.defineProperty(exports,"__esModule",{value:true});exports.











push=push;exports.





pop=pop;exports.





gotoPreviousScreen=gotoPreviousScreen;exports.









gotoSignUpPage=gotoSignUpPage;exports.















onLogin=onLogin;var _types=require('./types');var types=babelHelpers.interopRequireWildcard(_types);var _reactNative=require('react-native');var _reactNative2=babelHelpers.interopRequireDefault(_reactNative);var NavigationExperimental=_reactNative2.default.NavigationExperimental;var jumpToIndex=NavigationExperimental.StateUtils.jumpToIndex;function push(route){return{type:types.NAVIGATION_FORWARD,payload:route};}function pop(){return{type:types.NAVIGATION_BACK};}function gotoPreviousScreen(action){return function(dispatch,getState){dispatch({type:types.NAVIGATION_BACK,action:action});};}function gotoSignUpPage(action){return function(dispatch,getState){dispatch({type:types.SHOW_USER_SIGNUP,action:action});};}function onLogin(action){
return function(dispatch,getState){
dispatch({
type:types.SHOW_ALL_BOOKS,
action:action});

};
}