import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import ProtectedRoute from '../HOCs/ProtectedRoute';
import { deleteAccount } from '../redux/account/accountOperations';
import { getUserEmail, getUserName } from '../redux/account/accountSelectors';

const AccountPage = ({ email, name, onDeleteAccount }) => (
  <section>
    <h2>AccountPage</h2>
    <h3>
      <span>NAME : </span>
      <span>{name}</span>
    </h3>
    <h3>
      <span>EMAIL : </span>
      <span>{email}</span>
    </h3>
    <button type="button" onClick={onDeleteAccount}>
      Delete Account
    </button>
  </section>
);

AccountPage.propTypes = {
  email: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  onDeleteAccount: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: getUserName(state),
  email: getUserEmail(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteAccount: () => dispatch(deleteAccount()),
});

export default ProtectedRoute(connect(mapStateToProps, mapDispatchToProps)(AccountPage));
