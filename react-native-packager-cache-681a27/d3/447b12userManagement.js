Object.defineProperty(exports,"__esModule",{value:true});exports.userAccount=undefined;var _reactNative=require('react-native');var _reactNative2=babelHelpers.interopRequireDefault(_reactNative);

var _types=require('../actions/types');var types=babelHelpers.interopRequireWildcard(_types);
var _createReducer=require('../lib/createReducer');var _createReducer2=babelHelpers.interopRequireDefault(_createReducer);var NavigationExperimental=_reactNative2.default.NavigationExperimental,StatusBar=_reactNative2.default.StatusBar;var


NavigationCardStack=

NavigationExperimental.CardStack,NavigationStateUtils=NavigationExperimental.StateUtils;




var initialState={
index:0,
key:'Login',
routes:[
{key:'Login'},
{key:'Signup'},
{key:'BooksTabs'}]};




var userAccount=exports.userAccount=(0,_createReducer2.default)(initialState,
{});