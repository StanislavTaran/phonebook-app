import { createAction } from '@reduxjs/toolkit';
// REFRESH USER
export const refreshUserRequest = createAction('REFRESH_USER_REQUEST');
export const refreshUserSucces = createAction('REFRESH_USER_SUCCES');
export const refreshUserError = createAction('REFRESH_USER_ERROR');

// LOGIN
export const logInRequest = createAction('LOGIN_REQUEST');
export const logInSucces = createAction('LOGIN_SUCCES');
export const logInError = createAction('LOGIN_ERROR');

// SIGNUP
export const signupRequest = createAction('SIGNUP_REQUEST');
export const signupSucces = createAction('SIGNUP_SUCCES');
export const signupError = createAction('SIGNUP_ERROR');

// LOGOUT
export const logout = createAction('LOGOUT');
