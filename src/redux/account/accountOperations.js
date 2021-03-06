/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { deleteAccountSucces, deleteAccountError, deleteAccountRequest } from './accountActions';
import { getToken } from '../session/sessionSelectors';
import { logOut } from '../session/sessionOperations';
import * as phonebookAPI from '../../api/phonebook-api';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const deleteAccount = () => (dispatch, getState) => {
  const token = getToken(getState());

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch(deleteAccountRequest());

  phonebookAPI
    .deleteAccount(options)
    .then(() => {
      dispatch(deleteAccountSucces());
      dispatch(logOut());
    })
    .catch(error => {
      dispatch(deleteAccountError(error));
    });
};
