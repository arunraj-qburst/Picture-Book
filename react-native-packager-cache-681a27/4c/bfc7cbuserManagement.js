Object.defineProperty(exports,"__esModule",{value:true});exports.


renderUserLoginView=renderUserLoginView;exports.





renderUserSignupView=renderUserSignupView;exports.




renderUserProfileView=renderUserProfileView;exports.





onLogout=onLogout;var _types=require('./types');var types=babelHelpers.interopRequireWildcard(_types);var _api=require('../lib/api');var _api2=babelHelpers.interopRequireDefault(_api);function renderUserLoginView(){return{type:types.SHOW_USER_LOGIN};}function renderUserSignupView(){return{type:types.SHOW_USER_SIGNUP};}function renderUserProfileView(){return{type:types.SHOW_USER_PROFILE};}function onLogout(){
return function(dispatch,getState){
dispatch({
type:types.ON_USER_LOGOUT});

};
}