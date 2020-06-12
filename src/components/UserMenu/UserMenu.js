import React from 'react';
import propTypes from 'prop-types';

const UserMenu = ({ email, onLogOut }) => (
  <div>
    <h3>{email}</h3>
    <button type="button" onClick={onLogOut}>
      Log Out
    </button>
  </div>
);

UserMenu.propTypes = {
  email: propTypes.string.isRequired,
  onLogOut: propTypes.func.isRequired,
};

export default UserMenu;
