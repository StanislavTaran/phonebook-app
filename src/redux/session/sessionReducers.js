import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './sessionActions';

const user = createReducer(
  {},
  {
    [actions.logInSucces]: (state, action) => action.payload.data.user,
    [actions.signupSucces]: (state, action) => action.payload.data.user,
    [actions.refreshUserSucces]: (state, action) => action.payload.data,
    [actions.logoutSucces]: () => ({}),
  },
);

const authenticated = createReducer(false, {
  [actions.logInSucces]: () => true,
  [actions.signupSucces]: () => true,
  [actions.refreshUserSucces]: () => true,
  [actions.logoutSucces]: () => false,
});

const token = createReducer(null, {
  [actions.logInSucces]: (state, action) => action.payload.data.token,
  [actions.signupSucces]: (state, action) => action.payload.data.token,
  [actions.logoutSucces]: () => null,
});

const error = createReducer(
  {},
  {
    [actions.logInError]: (state, action) =>
      action.payload === 'Request failed with status code 400'
        ? 'Error! It looks like the login or password is wrong'
        : 'Something went wrong! Please try later',
    [actions.signupError]: (state, action) => action.payload,
    [actions.refreshUserError]: (state, action) => action.payload,
    [actions.logoutError]: (state, action) => action.payload,
    [actions.logInSucces]: () => ({}),
    [actions.signupSucces]: () => ({}),
    [actions.logoutSucces]: () => ({}),
  },
);

export default combineReducers({
  user,
  token,
  authenticated,
  error,
});
