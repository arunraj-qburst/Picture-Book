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
    { key: 'Login'  }  
  ]
}


export const navigationState = createReducer(initialNavState, 
  {
  [types.NAVIGATION_PUSH](state, action) { 
     const {newState} = Object.assign({},state, action.route);
     console.log('newState-----------------')
     console.log(newState)
      console.log('newState-----------state.index------'+state.index)
     console.log('newState-----------------')
     if (state.routes[state.index].key === (action.route && action.route.key)) return state;
    // ensure no duplicate keys
    const index = state.routes.findIndex((route) => {
        return action.route.key === route.key  ;
    });
    if (index > -1) {
        const clonedState = Object.assign({}, state);
        clonedState.routes.splice(index, 1);
        return NavigationStateUtils.push(clonedState, action.route);
    }
    // normal case for a push
    return NavigationStateUtils.push(state,    action.route);
 
        
  }, 

  [types.NAVIGATION_POP](state, action) { 
    return NavigationStateUtils.pop(state);
    // return NavigationStateUtils.pop(state);
  }  
  
});

 
 