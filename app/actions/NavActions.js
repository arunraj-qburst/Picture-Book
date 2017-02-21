import * as types from './types'
import ReactNative from 'react-native'
const { NavigationExperimental } =  ReactNative
const { jumpToIndex } = NavigationExperimental.StateUtils;
/*
export function setTab(tabIndex) {
  return (dispatch, getState) => {
    const { tabs } = getState()
    dispatch(Object.assign({ type: types.SET_TAB }, jumpToIndex(tabs, tabIndex)));
  }
}*/

export function push(route) {
  return {
    type: types.NAVIGATION_FORWARD,
    payload: route,
  };
}
export function pop() {
  return {
    type: types.NAVIGATION_BACK,
  };
}

export function gotoPreviousScreen(action) {
 
  return (dispatch, getState) => {
    dispatch({
      type: types.NAVIGATION_BACK,  
       action
    })
  }
}

export function gotoSignUpPage(action) {
  return (dispatch, getState) => {
    dispatch({
      type: types.SHOW_USER_SIGNUP,  
      action
    })
  }
}
/*
export function onLogin(action) {
  return {type: types.SHOW_ALL_BOOKS,  
      action }
}*/



export function onLogin(action) {
  return (dispatch, getState) => { 
    dispatch({
      type: types.SHOW_ALL_BOOKS,  
       action
    })
  }
}
 