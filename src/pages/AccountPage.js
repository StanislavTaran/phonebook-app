import React from 'react';
import ProtectedRoute from '../HOCs/ProtectedRoute';
import AccountInfo from '../components/AccountInfo/AccountInfoContainer';

const AccountPage = () => <AccountInfo />;

export default ProtectedRoute(AccountPage);
