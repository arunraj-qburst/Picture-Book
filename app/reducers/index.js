import { combineReducers } from 'redux';
import * as userManagement from './userManagement'
import * as navigationReducer from './navigation'

export default combineReducers(Object.assign(
  userManagement,
  navigationReducer
));