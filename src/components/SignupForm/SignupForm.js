import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
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
      <Container maxWidth="sm">
        <div className={styles.loginBar}>
          <AccountBoxRoundedIcon color="primary" fontSize="large" />
          <span>Please sign up for using Phonebook!</span>
        </div>

        <form onSubmit={this.submitHandler} className={styles.form}>
          <TextField
            required
            fullWidth
            variant="filled"
            margin="normal"
            label="NAME"
            id="signup-input-name"
            helperText="Enter your name"
            color="primary"
            name="name"
            value={name}
            onChange={this.changeHandler}
          />

          <TextField
            required
            fullWidth
            variant="filled"
            margin="normal"
            label="EMAIL"
            id="signup-input-email"
            helperText="Enter your Email"
            color="primary"
            type="email"
            name="email"
            value={email}
            onChange={this.changeHandler}
          />

          <TextField
            required
            fullWidth
            variant="filled"
            margin="normal"
            label="PASSWORD"
            id="signup-input-email"
            helperText="Enter password"
            color="primary"
            type="password"
            name="password"
            value={password}
            onChange={this.changeHandler}
          />

          <Button
            color="primary"
            size="large"
            variant="contained"
            className={styles.button}
            type="submit"
          >
            Sign Up
          </Button>
          <div>Already have an account?</div>
          <Button color="secondary" size="large" variant="outlined" className={styles.button}>
            <Link className={styles.buttonSecondary} to="/login">
              LOG IN
            </Link>
          </Button>
        </form>
      </Container>
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
