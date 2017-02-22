Object.defineProperty(exports,"__esModule",{value:true});exports.navigationState=undefined;var _createReducer;var _reactNative=require('react-native');var _reactNative2=babelHelpers.interopRequireDefault(_reactNative);

var _types=require('../actions/types');var types=babelHelpers.interopRequireWildcard(_types);
var _createReducer2=require('../lib/createReducer');var _createReducer3=babelHelpers.interopRequireDefault(_createReducer2);var NavigationExperimental=_reactNative2.default.NavigationExperimental,StatusBar=_reactNative2.default.StatusBar,Navigator=_reactNative2.default.Navigator;var




NavigationCardStack=


NavigationExperimental.CardStack,NavigationStateUtils=NavigationExperimental.StateUtils;


var initialNavState={
index:0,
key:'Login',
routes:[
{key:'Login'}]};




var navigationState=exports.navigationState=(0,_createReducer3.default)(initialNavState,(_createReducer={},babelHelpers.defineProperty(_createReducer,

types.NAVIGATION_PUSH,function(state,action){var _Object$assign=
babelHelpers.extends({},state,action.route),newState=_Object$assign.newState;
console.log('newState-----------------');
console.log(newState);
console.log('newState-----------state.index------'+state.index);
console.log('newState-----------------');
if(state.routes[state.index].key===(action.route&&action.route.key))return state;

var index=state.routes.findIndex(function(route){
return action.route.key===route.key;
});
if(index>-1){
var clonedState=babelHelpers.extends({},state);
clonedState.routes.splice(index,1);
return NavigationStateUtils.push(clonedState,action.route);
}

return NavigationStateUtils.push(state,action.route);


}),babelHelpers.defineProperty(_createReducer,

types.NAVIGATION_POP,function(state,action){
return NavigationStateUtils.pop(state);

}),_createReducer));