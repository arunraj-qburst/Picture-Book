import ReactNative from 'react-native';
const { NavigationExperimental, StatusBar} = ReactNative;
import * as types from '../actions/types'
import createReducer from '../lib/createReducer'

const {
 CardStack: NavigationCardStack,
 StateUtils: NavigationStateUtils
} = NavigationExperimental

 
 

const initialState = {
       isLoading:false,
       
        userData:{
        userId: null ,
        fullName: null,
        firstName:  null ,
        lastName:  null,
        email:  null ,
        accesTocken:  null,
        message: 'invalid user',
        isLoggedIn: false
      }
}


  
export const userData = createReducer(initialState, 
  {
  [types.NAVIGATION_PUSH](state, action) { 
     const {newState} = Object.assign({},state, action.route);
     
      return newState;
 
        
  }, 

  [types.ON_LOGIN_SUCCESS](state, action) { 
    console.log('@Reducer ^^^^^ ON_LOGIN_SUCCESS', action) 
      const {newState} = Object.assign({},state, {action}, isLoading = false   ); 
      return newState;
  }  
  
});