/* eslint-disable dot-notation */
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
import * as phonebookAPI from '../../api/phonebook-api';

export const downloadContacts = () => dispatch => {
  dispatch(getContactsRequest());

  phonebookAPI
    .getContacts()
    .then(res => {
      dispatch(getContactsSucces(res.data));
    })
    .catch(error => {
      dispatch(getContactsError(error));
    });
};

export const addContact = credentials => dispatch => {
  dispatch(addContactRequest());

  phonebookAPI
    .addContact(credentials)
    .then(res => {
      dispatch(addContactSucces(res.data));
    })
    .catch(error => {
      dispatch(addContactError(error));
    });
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  phonebookAPI
    .deleteContact(id)
    .then(() => {
      dispatch(deleteContactSucces(id));
    })
    .catch(error => {
      dispatch(deleteContactError(error));
    });
};
