import axios from 'axios';

// ACCOUNT
export const deleteAccount = options => axios.delete(`/users/current`, options);

// PHONEBOOK
// todo make SetAuthToken in operations
export const getContacts = options => axios.get('/contacts', options);
export const addContact = (credentials, options) => axios.post('/contacts', credentials, options);
export const deleteContact = (id, options) => axios.delete(`/contacts/${id}`, options);

// SESSION
export const login = credentials => axios.post('/users/login', credentials);
export const signup = credentials => axios.post('/users/signup', credentials);
export const refreshCurrentUser = () => axios.get('/users/current');

export const logout = () => axios.post('/users/logout');
