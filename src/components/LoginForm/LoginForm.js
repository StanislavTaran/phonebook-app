import React, { Component } from 'react';
import { TextField, Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styles from './LoginForm.module.css';
import * as sessionOperations from '../../redux/session/sessionOperations';

// todo пофиксить скрытие пароля при введении

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
      <Container maxWidth="sm">
        <div className={styles.loginBar}>
          <AccountBoxRoundedIcon color="primary" fontSize="large" />
          <span>Please log in for using Phonebook!</span>
        </div>

        <form onSubmit={this.submitHandler} className={styles.form}>
          <TextField
            fullWidth
            variant="filled"
            margin="normal"
            label="EMAIL"
            id="loginform-input-email"
            helperText="Enter your Email"
            color="primary"
            type="email"
            name="email"
            value={email}
            onChange={this.changeHandler}
          />

          <TextField
            fullWidth
            variant="filled"
            multiline
            margin="normal"
            label="PASSWORD"
            id="loginform-input-password"
            helperText="Enter the password"
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
            Log In
          </Button>
          <div>Don&apos;t have an account?</div>
          <Button color="secondary" size="large" variant="outlined" className={styles.button}>
            <Link className={styles.buttonSecondary} to="/signup">
              SIGN UP
            </Link>
          </Button>
        </form>
      </Container>
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
