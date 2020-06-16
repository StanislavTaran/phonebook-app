import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import WithAuthRedirect from '../HOCs/WithAuthRedirect';

const LoginPage = () => (
  <>
    <h2>LOGIN</h2>
    <LoginForm />
  </>
);

export default WithAuthRedirect(LoginPage);
