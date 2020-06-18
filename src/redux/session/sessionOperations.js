/* eslint-disable dot-notation */
import axios from 'axios';
import * as actions from './sessionActions';
import { getToken } from './sessionSelectors';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

// todo обработать ошибки
const setAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common['Authorization'] = null;
};

export const login = credentials => dispatch => {
  dispatch(actions.logInRequest());

  axios
    .post('/users/login', credentials)
    .then(res => {
      setAuthToken(res.data.token);
      dispatch(actions.logInSucces(res));
    })
    .catch(error => {
      dispatch(actions.logInError(error.message));
    });
};

export const signup = credentials => dispatch => {
  dispatch(actions.signupRequest());

  axios
    .post('/users/signup', credentials)
    .then(res => {
      dispatch(actions.signupSucces(res));
    })
    .catch(error => {
      dispatch(actions.signupError(error.message));
    });
};

export const refreshUser = () => (dispatch, getState) => {
  const token = getToken(getState());

  if (!token) {
    return;
  }

  setAuthToken(token);

  dispatch(actions.refreshUserRequest());

  axios
    .get('/users/current')
    .then(res => {
      dispatch(actions.refreshUserSucces(res));
    })
    .catch(error => {
      clearAuthToken();
      dispatch(actions.refreshUserError(error.message));
    });
};

export const logOut = () => dispatch => {
  clearAuthToken();

  dispatch(actions.logout());
};
