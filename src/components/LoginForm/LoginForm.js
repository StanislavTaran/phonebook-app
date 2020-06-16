import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styles from './LoginForm.module.css';

import * as sessionOperations from '../../redux/session/sessionOperations';

class LoginForm extends Component {
  state = { email: '', password: '' };

  submitHandler = e => {
    e.preventDefault();
    const { onLogin } = this.props;

    onLogin({ ...this.state });
    this.setState({ email: '', password: '' });
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={this.changeHandler}
          />
        </label>

        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={this.changeHandler}
          />
        </label>
        <button className={styles.button} type="submit">
          Log In
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onLogin: sessionOperations.login,
};

LoginForm.propTypes = {
  onLogin: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginForm);
