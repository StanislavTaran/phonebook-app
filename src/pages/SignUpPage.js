import React from 'react';
import SignupForm from '../components/SignupForm/SignupForm';
import WithAuthRedirect from '../HOCs/WithAuthRedirect';

const SignupPage = () => <SignupForm />;

export default WithAuthRedirect(SignupPage);
