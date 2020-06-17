export const getToken = state => state.session.token;

export const isAuthenticated = state => state.session.authenticated;

export const getUser = state => state.session.user;
export const getUserEmail = state => state.session.user && state.session.user.email;
