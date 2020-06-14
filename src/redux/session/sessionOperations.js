/* eslint-disable dot-notation */
import axios from 'axios';
import * as actions from './sessionActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const setAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// const clearAuthToken = () => {
//   axios.defaults.headers.common['Authorization'] = null;
// };

export const login = credentials => dispatch => {
  dispatch(actions.logInRequest());

  axios
    .post('/users/login', credentials)
    .then(res => {
      console.log(res);
      setAuthToken(res.data.token);
      dispatch(actions.logInSucces(res));
    })
    .catch(error => {
      console.log(error.message);
      dispatch(actions.logInError(error.message));
    });
};

export const signup = credentials => dispatch => {
  dispatch(actions.signupRequest());

  axios
    .post('/users/signup', credentials)
    .then(res => {
      console.log(res);
      dispatch(actions.signupSucces(res));
    })
    .catch(error => {
      console.log(error.message);
      dispatch(actions.signupError(error.message));
    });
};
