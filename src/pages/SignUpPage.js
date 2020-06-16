import React from 'react';
import SignupForm from '../components/SignupForm/SignupForm';
import WithAuthRedirect from '../HOCs/WithAuthRedirect';

const SignupPage = () => (
  <>
    <h2>SignupPage</h2>
    <SignupForm />
  </>
);

export default WithAuthRedirect(SignupPage);
