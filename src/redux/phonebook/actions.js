import { createAction } from '@reduxjs/toolkit';

// FILTER

export const changeFilterAction = createAction('contacts/CHANGE_FILTER');

// CONTACTS

// CONTACTS GET
export const getContactsRequest = createAction('contacts/GET_CONTACTS_REQUEST');
export const getContactsSucces = createAction('contacts/GET_CONTACTS_SUCCES');
export const getContactsError = createAction('contacts/GET_CONTACTS_ERROR');

// CONTACTS ADD
export const addContactRequest = createAction('contacts/ADD_CONTACT_REQUEST');
export const addContactSucces = createAction('contacts/ADD_CONTACT_SUCCES');
export const addContactError = createAction('contacts/ADD_CONTACT_ERROR');

// CONTACTS DELETE

export const deleteContactRequest = createAction('contacts/DELETE_CONTACT_REQUEST');
export const deleteContactSucces = createAction('contacts/DELETE_CONTACT_SUCCES');
export const deleteContactError = createAction('contacts/DELETE_CONTACT_ERROR');
