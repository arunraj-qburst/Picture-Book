







var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactRedux=require('react-redux');
var _redux=require('redux');
var _reduxThunk=require('redux-thunk');var _reduxThunk2=babelHelpers.interopRequireDefault(_reduxThunk);
var _reduxLogger=require('redux-logger');var _reduxLogger2=babelHelpers.interopRequireDefault(_reduxLogger);
var _reducers=require('./app/reducers');var _reducers2=babelHelpers.interopRequireDefault(_reducers);


var _AppRoute=require('./app/containers/AppRoute');var _AppRoute2=babelHelpers.interopRequireDefault(_AppRoute);




var loggerMiddleware=(0,_reduxLogger2.default)({predicate:function predicate(getState,action){return __DEV__;}});

function configureStore(initialState){
var enhancer=(0,_redux.compose)(
(0,_redux.applyMiddleware)(_reduxThunk2.default,

loggerMiddleware));


return(0,_redux.createStore)(_reducers2.default,initialState,enhancer);
}

var store=configureStore({});

var App=function App(){return(
_react2.default.createElement(_reactRedux.Provider,{store:store},
_react2.default.createElement(_AppRoute2.default,null)));};



_reactNative.AppRegistry.registerComponent('reader',function(){return App;});