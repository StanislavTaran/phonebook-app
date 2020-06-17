import axios from 'axios';
import {
  onExistFlagAction,
  offExistFlagAction,
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

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const toogleExistFlag = () => dispatch => {
  dispatch(onExistFlagAction());

  setTimeout(() => {
    dispatch(offExistFlagAction());
  }, 3000);
};

export const downloadContacts = () => (dispatch, getState) => {
  const token = getToken(getState());

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  dispatch(getContactsRequest());

  axios
    .get('/contacts', options)
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

  axios
    .post('/contacts', credentials, options)
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

  axios
    .delete(`/contacts/${id}`, options)
    .then(() => {
      dispatch(deleteContactSucces(id));
    })
    .catch(error => {
      dispatch(deleteContactError(error));
    });
};
