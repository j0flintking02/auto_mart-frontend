import { combineReducers } from 'redux';
import signupReducer from './signupReducer';

export default combineReducers({
  signup: signupReducer,
});