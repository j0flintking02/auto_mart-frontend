import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import signinReducer from './signinReducer';

export default combineReducers({
  signup: signupReducer,
  signin: signinReducer,
});