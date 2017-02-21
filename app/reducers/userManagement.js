import ReactNative from 'react-native';
const { NavigationExperimental, StatusBar} = ReactNative;
import * as types from '../actions/types'
import createReducer from '../lib/createReducer'

const {
 CardStack: NavigationCardStack,
 StateUtils: NavigationStateUtils
} = NavigationExperimental

 
 

const initialState = {
  index: 0,
  key: 'Login',
  routes: [
    { key: 'Login'  },
      { key: 'Signup' }  ,
     { key: 'BooksTabs' } 
  ]
}


 export const userAccount = createReducer(initialState, 
  {
   
  
});



