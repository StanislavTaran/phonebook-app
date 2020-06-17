import { createAction } from '@reduxjs/toolkit';
// ACCOUNT
export const deleteAccountRequest = createAction('contacts/DELETE_ACCOUNT_REQUEST');
export const deleteAccountSucces = createAction('contacts/DELETE_ACCOUNT_SUCCES');
export const deleteAccountError = createAction('contacts/DELETE_ACCOUNT_ERROR');
