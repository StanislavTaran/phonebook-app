import axios from 'axios';

// ACCOUNT
export const deleteAccount = () => axios.delete(`/users/current`);

// PHONEBOOK
export const getContacts = () => axios.get('/contacts');
export const addContact = credentials => axios.post('/contacts', credentials);
export const deleteContact = id => axios.delete(`/contacts/${id}`);

// SESSION
export const login = credentials => axios.post('/users/login', credentials);
export const signup = credentials => axios.post('/users/signup', credentials);
export const refreshCurrentUser = () => axios.get('/users/current');

export const logout = () => axios.post('/users/logout');
