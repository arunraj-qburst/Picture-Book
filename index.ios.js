/**
 *
 * Picture Book E-Reader App
 * Copy-right QBurst@2017
 * Created : 15 Feb 2017
 * Auther : Arunrajs
 *
 */
import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './app/reducers'
//import AppContainer from './app/containers/AppContainer'
//import AppNavigator from './app/containers/AppNavigator'
import AppRoute from './app/containers/AppRoute'
import UserProfile from './app/containers/userProfilePageView/index'
import LoginPage from './app/containers/loginPageView'
import UserProfileEditPageView from './app/containers/userProfileEditPageView'



//import Orientation from 'react-native-orientation'

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});
//console.log('Orientation.getInitialOrientation()' +Orientation.getInitialOrientation());
const App = () => (
  <Provider store={store}>
    <UserProfileEditPageView/>
  </Provider>
)

 AppRegistry.registerComponent('reader', () => App);
