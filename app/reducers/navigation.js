import ReactNative from 'react-native';
const { NavigationExperimental, StatusBar,Navigator} = ReactNative;
import * as types from '../actions/types'
import createReducer from '../lib/createReducer'
//import ApplicationTabs from '../containers/ApplicationTabs'
//import Detail from '../containers/Detail'

const {
 CardStack: NavigationCardStack,
 StateUtils: NavigationStateUtils,
 
} = NavigationExperimental
 

const initialNavState = {
  index: 0,
  key: 'Login',
  routes: [
    { key: 'Login',index:0  },
      { key: 'Signup',index:1 } 
       ,
     { key: 'BooksTabs',index:2 }  
  ]
}


export const navigationState = createReducer(initialNavState, 
  {
  [types.NAVIGATION_FORWARD](state, action) {
    //if (state.routes[state.index].key === (action.key)) return state;
      return NavigationStateUtils.forward(state, action ) 
  },

  [types.SHOW_USER_SIGNUP](state, action) {
   // return NavigationStateUtils.back(state);
   //if (state.routes[state.index].key === (action.key)) return state;
     return NavigationStateUtils.forward(state, action ) 
  } ,

  [types.NAVIGATION_BACK](state, action) {
 
    return NavigationStateUtils.pop(state);
    // return NavigationStateUtils.pop(state);
  } ,

  [types.SHOW_ALL_BOOKS](state, action) {
    console.log("SHOW_ALL_BOOKS "+action.key)
    
//if (state.routes[state.index].key === (action.key )) return state;
     return NavigationStateUtils.forward( {...state,action}, action ) 
    // return NavigationStateUtils.pop(state);
  }   
  
});


 


export const navigationParams = createReducer({ }, {
  [types.NAVIGATION_FORWARD](state, action) {
    return action.state;
  },

  

});