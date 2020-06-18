import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { deleteAccountSucces, deleteAccountError } from './accountActions';
import { logInSucces, signupSucces, logout, refreshUserSucces } from '../session/sessionActions';

const account = createReducer(
  {},
  {
    [deleteAccountSucces]: () => ({}),
    [logout]: () => ({}),
    [logInSucces]: (state, action) => ({ ...action.payload.data.user }),
    [signupSucces]: (state, action) => ({ ...action.payload.data.user }),
    [refreshUserSucces]: (state, action) => ({ ...action.payload.data }),
  },
);

const error = createReducer(
  {},
  {
    [deleteAccountError]: (state, action) => ({ ...action.payload }),
  },
);

const accountReducer = combineReducers({ account, error });

export default accountReducer;