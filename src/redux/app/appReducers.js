import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  deleteAccountError,
  deleteAccountRequest,
  deleteAccountSucces,
} from '../account/accountActions';
import * as phonebookActions from '../phonebook/actions';
import * as sessionActions from '../session/sessionActions';

const isLoading = createReducer(false, {
  [deleteAccountRequest]: () => true,
  [deleteAccountSucces]: () => false,
  [deleteAccountError]: () => false,

  [phonebookActions.addContactRequest]: () => true,
  [phonebookActions.addContactSucces]: () => false,
  [phonebookActions.addContactError]: () => false,

  [phonebookActions.deleteContactRequest]: () => true,
  [phonebookActions.deleteContactSucces]: () => false,
  [phonebookActions.deleteContactError]: () => false,

  [phonebookActions.getContactsRequest]: () => true,
  [phonebookActions.getContactsSucces]: () => false,
  [phonebookActions.getContactsError]: () => false,

  [sessionActions.refreshUserRequest]: () => true,
  [sessionActions.refreshUserSucces]: () => false,
  [sessionActions.refreshUserError]: () => false,

  [sessionActions.logInRequest]: () => true,
  [sessionActions.logInSucces]: () => false,
  [sessionActions.logInError]: () => false,

  [sessionActions.signupRequest]: () => true,
  [sessionActions.signupSucces]: () => false,
  [sessionActions.signupError]: () => false,

  [sessionActions.logoutRequest]: () => true,
  [sessionActions.logoutSucces]: () => false,
  [sessionActions.logoutError]: () => false,
});

export default combineReducers({
  isLoading,
});
