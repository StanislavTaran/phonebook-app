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

export const logoutRequest = createAction('session/LOGOUT_REQUEST');
export const logoutSucces = createAction('session/LOGOUT_SUCCES');
export const logoutError = createAction('session/LOGOUT_ERROR');
