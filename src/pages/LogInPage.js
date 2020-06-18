import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import WithAuthRedirect from '../HOCs/WithAuthRedirect';

const LoginPage = () => <LoginForm />;

export default WithAuthRedirect(LoginPage);
