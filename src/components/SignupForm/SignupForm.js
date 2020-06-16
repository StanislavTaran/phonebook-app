import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styles from './SignupForm.module.css';

import * as sessionOperations from '../../redux/session/sessionOperations';

class SignUpForm extends Component {
  state = { name: '', email: '', password: '' };

  submitHandler = e => {
    e.preventDefault();
    const { onSignUp } = this.props;
    onSignUp({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <label className={styles.label}>
          Name
          <input className={styles.input} name="name" value={name} onChange={this.changeHandler} />
        </label>
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
          Sign Up
        </button>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  onSignUp: propTypes.func.isRequired,
};

const mapDispatchToProps = {
  onSignUp: sessionOperations.signup,
};

export default connect(null, mapDispatchToProps)(SignUpForm);
