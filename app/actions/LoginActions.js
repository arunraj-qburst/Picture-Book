import * as types from './types'
import Api from '../lib/api'

export function renderUserLoginView(){
    return{
        type:types.SHOW_USER_LOGIN
    }
}

export function renderUserSignupView(){
    return{
        type:types.SHOW_USER_SIGNUP
    }
}
export function renderUserProfileView(){
    return{
        type:types.SHOW_USER_PROFILE
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