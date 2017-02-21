Object.defineProperty(exports,"__esModule",{value:true});exports.navigationParams=exports.navigationState=undefined;var _createReducer;var _reactNative=require('react-native');var _reactNative2=babelHelpers.interopRequireDefault(_reactNative);

var _types=require('../actions/types');var types=babelHelpers.interopRequireWildcard(_types);
var _createReducer3=require('../lib/createReducer');var _createReducer4=babelHelpers.interopRequireDefault(_createReducer3);var NavigationExperimental=_reactNative2.default.NavigationExperimental,StatusBar=_reactNative2.default.StatusBar,Navigator=_reactNative2.default.Navigator;var




NavigationCardStack=


NavigationExperimental.CardStack,NavigationStateUtils=NavigationExperimental.StateUtils;




























var initialNavState={
index:0,
key:'Login',
routes:[
{key:'Login',index:0},
{key:'Signup',index:1},

{key:'BooksTabs',index:2}]};




var navigationState=exports.navigationState=(0,_createReducer4.default)(initialNavState,(_createReducer={},babelHelpers.defineProperty(_createReducer,

types.NAVIGATION_FORWARD,function(state,action){

return NavigationStateUtils.forward(state,action);
}),babelHelpers.defineProperty(_createReducer,

types.SHOW_USER_SIGNUP,function(state,action){


return NavigationStateUtils.forward(state,action);
}),babelHelpers.defineProperty(_createReducer,

types.NAVIGATION_BACK,function(state,action){

return NavigationStateUtils.pop(state);

}),babelHelpers.defineProperty(_createReducer,

types.SHOW_ALL_BOOKS,function(state,action){
console.log("SHOW_ALL_BOOKS "+action.key);


return NavigationStateUtils.forward(babelHelpers.extends({},state,{action:action}),action);

}),_createReducer));











var navigationParams=exports.navigationParams=(0,_createReducer4.default)({},babelHelpers.defineProperty({},
types.NAVIGATION_FORWARD,function(state,action){
return action.state;
}));