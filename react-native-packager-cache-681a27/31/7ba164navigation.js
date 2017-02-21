Object.defineProperty(exports,"__esModule",{value:true});exports.











navigate=navigate;exports.












navigateBack=navigateBack;exports.







gotoLoginPage=gotoLoginPage;exports.







gotoSignUpPage=gotoSignUpPage;exports.







gotoBookListPage=gotoBookListPage;var _types=require('./types');var types=babelHelpers.interopRequireWildcard(_types);var _reactNative=require('react-native');var _reactNative2=babelHelpers.interopRequireDefault(_reactNative);var NavigationExperimental=_reactNative2.default.NavigationExperimental;var jumpToIndex=NavigationExperimental.StateUtils.jumpToIndex;function navigate(action){return function(dispatch,getState){dispatch(navigateForward(action));};}function navigateForward(state){return{type:types.NAVIGATION_FORWARD,state:state};}function navigateBack(){return function(dispatch,getState){dispatch({type:types.NAVIGATION_BACK});};}function gotoLoginPage(){return function(dispatch,getState){dispatch({type:types.SHOW_USER_LOGIN});};}function gotoSignUpPage(){return function(dispatch,getState){dispatch({type:types.SHOW_USER_SIGNUP});};}function gotoBookListPage(){
return function(dispatch,getState){
dispatch({
type:types.SHOW_ALL_BOOKS,
state:state});


};
}