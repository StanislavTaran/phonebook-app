import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactSucces,
  addContactError,
  deleteContactSucces,
  deleteContactError,
  getContactsSucces,
  getContactsError,
  changeFilterAction,
  onExistFlagAction,
  offExistFlagAction,
} from './actions';
import { logoutSucces } from '../session/sessionActions';

const contacts = createReducer([], {
  [getContactsSucces]: (state, action) => [...action.payload],
  [addContactSucces]: (state, action) => [...state, action.payload],
  [deleteContactSucces]: (state, action) => state.filter(contact => contact.id !== action.payload),
  [logoutSucces]: () => [],
});

const errors = createReducer([], {
  [getContactsError]: (state, action) => ({ ...action.payload }),
  [addContactError]: (state, action) => ({ ...action.payload }),
  [deleteContactError]: (state, action) => ({ ...action.payload }),
  [getContactsSucces]: () => [],
  [addContactSucces]: () => [],
  [deleteContactSucces]: () => [],
  [logoutSucces]: () => [],
});

const filter = createReducer('', {
  [changeFilterAction]: (state, action) => action.payload,
  [logoutSucces]: () => '',
});

const notificationState = { isContactAlreadyExist: false };
const notification = createReducer(notificationState, {
  [onExistFlagAction]: state => ({ ...state, isContactAlreadyExist: true }),
  [offExistFlagAction]: state => ({ ...state, isContactAlreadyExist: false }),
});

const contactsReducer = combineReducers({
  contacts,
  filter,
  errors,
  notification,
});

export default contactsReducer;
