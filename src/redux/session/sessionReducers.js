import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './sessionActions';

const user = createReducer(
  {},
  {
    [actions.logInSucces]: (state, action) => action.payload,
    [actions.signupSucces]: (state, action) => action.payload,
    [actions.refreshUserSucces]: (state, action) => action.payload,
    [actions.logout]: () => {},
  },
);

const authenticated = createReducer(false, {
  [actions.logInSucces]: () => true,
  [actions.signupSucces]: () => true,
  [actions.refreshUserSucces]: () => true,
  [actions.logout]: () => false,
});

const token = createReducer(null, {
  [actions.logInSucces]: (state, action) => action.payload,
  [actions.signupSucces]: (state, action) => action.payload,
  [actions.refreshUserSucces]: (state, action) => action.payload,
  [actions.logout]: () => {},
});

const error = createReducer(null, {
  [actions.logInError]: (state, action) => action.payload,
  [actions.signupError]: (state, action) => action.payload,
  [actions.refreshUserError]: (state, action) => action.payload,
});

export default combineReducers({
  user,
  token,
  authenticated,
  error,
});
