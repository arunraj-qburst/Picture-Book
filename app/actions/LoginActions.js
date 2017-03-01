import * as types from './types'
import Api from '../lib/api'

export function onLogin(route){
    /*return{
        type:types.ON_LOGIN,
        route
    }*/ /*
 return (dispatch, getState) => { 
   let data={};
data.
userData={
        userId: null ,
        fullName: null,
        firstName:  null ,
        lastName:  null,
        email:  null ,
        accesTocken:  null,
        message:  "Failed to login",
        isLoggedIn: false
      }
     dispatch( onLoginSuccess(data));
 }*/
    //////
    return (dispatch, getState) => { 
    const params = route;
    return Api.post(`/users/login?${params}`,route).then(resp => {  
      if(resp.error==0  ){
         console.log("on   login success API@2",resp)
         dispatch( onLoginSuccess({userData:resp.result}));

      }
      else{
        
         dispatch( onLoginFail( {
        userId: null ,
        fullName: null,
        firstName:  null ,
        lastName:  null,
        email:  null ,
        accesTocken:  null,
        message: resp.message,
        isLoggedIn: false
      })); 
 
      } 
    }).catch( (ex) => {
        
          console.log("on api error @ login")
        
        onLoginFail( {
        userId: null ,
        fullName: null,
        firstName:  null ,
        lastName:  null,
        email:  null ,
        accesTocken:  null,
        message: "invalid user",
        isLoggedIn: false
      }); 
      console.log(ex);
    });
  }
}

export function onLoginSuccess(route){
    return{
        type:types.ON_LOGIN_SUCCESS,
        route
    }
}
export function onLoginFail(route){
    return{
        type:types.ON_LOGIN_FAIL,
        route
    }
}


export function onLogout() {
  return (dispatch, getState) => {
    dispatch({
      type: types.ON_USER_LOGOUT , 
    })
  }
}


/*
export function fetchRecipes(ingredients) {
  return (dispatch, getState) => {
    const params = [
      `i=${encodeURIComponent(ingredients)}`,
      'p=1'
    ].join('&')
    return Api.get(`/api/?${params}`).then(resp => {

      dispatch(setSearchedRecipes({recipes: resp}));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function setSearchedRecipes({ recipes }) {
  return {
    type: types.SET_SEARCHED_RECIPES,
    recipes,
  }
}
*/
