import { createAction } from '@reduxjs/toolkit';
// REFRESH USER
export const refreshUserRequest = createAction('session/REFRESH_USER_REQUEST');
export const refreshUserSucces = createAction('session/REFRESH_USER_SUCCES');
export const refreshUserError = createAction('session/REFRESH_USER_ERROR');

// LOGIN
export const logInRequest = createAction('session/LOGIN_REQUEST');
export const logInSucces = createAction('session/LOGIN_SUCCES');
export const logInError = createAction('session/LOGIN_ERROR');

// SIGNUP
export const signupRequest = createAction('session/SIGNUP_REQUEST');
export const signupSucces = createAction('session/SIGNUP_SUCCES');
export const signupError = createAction('session/SIGNUP_ERROR');

// LOGOUT

// todo сделать опреацию с запросом на бекенд для логаута
export const logout = createAction('session/LOGOUT');
