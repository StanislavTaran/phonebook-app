import axios from 'axios';
import {
  addContactRequest,
  addContactSucces,
  addContactError,
  getContactsRequest,
  getContactsSucces,
  getContactsError,
  deleteContactRequest,
  deleteContactSucces,
  deleteContactError,
} from './actions';
import { getToken } from '../session/sessionSelectors';
import * as phonebookAPI from '../../api/phonebook-api';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const downloadContacts = () => (dispatch, getState) => {
  const token = getToken(getState());

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  dispatch(getContactsRequest());

  phonebookAPI
    .getContacts(options)
    .then(res => {
      dispatch(getContactsSucces(res.data));
    })
    .catch(error => {
      dispatch(getContactsError(error));
    });
};

export const addContact = credentials => (dispatch, getState) => {
  const token = getToken(getState());

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch(addContactRequest());

  phonebookAPI
    .addContact(credentials, options)
    .then(res => {
      dispatch(addContactSucces(res.data));
    })
    .catch(error => {
      dispatch(addContactError(error));
    });
};

export const deleteContact = id => (dispatch, getState) => {
  const token = getToken(getState());

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch(deleteContactRequest());

  phonebookAPI
    .deleteContact(id, options)
    .then(() => {
      dispatch(deleteContactSucces(id));
    })
    .catch(error => {
      dispatch(deleteContactError(error));
    });
};
