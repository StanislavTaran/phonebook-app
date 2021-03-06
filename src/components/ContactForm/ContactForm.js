import React, { Component } from 'react';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { validateAll } from 'indicative/validator';
import { Button, TextField, InputAdornment, CircularProgress } from '@material-ui/core';
import InputMask from 'react-input-mask';
import FaceIcon from '@material-ui/icons/Face';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { CSSTransition } from 'react-transition-group';
import PopUpNotification from '../PopUpNotification/PopUpNotification';
import slideReverseTransition from '../../transitions/slide-reverse.module.css';
import styles from './ContactForm.module.css';

const rules = {
  name: 'required | string',
  number: 'required|min:2',
};

const messages = {
  'name.required': 'Please choose a name for contact',
  'number.required': 'Please enter a number',
  'number.min': 'Number must be at least 2 characters',
};

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    errors: null,
    isContactAlreadyExist: false,
  };

  InputNameId = uuidv4();

  InputNuberId = uuidv4();

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  toggleContactExistFlag = () => {
    this.setState(prevState => ({
      isContactAlreadyExist: !prevState.isContactAlreadyExist,
    }));
    setTimeout(() => {
      this.setState(prevState => ({
        isContactAlreadyExist: !prevState.isContactAlreadyExist,
      }));
    }, 2000);
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
      errors: null,
      isContactAlreadyExist: false,
    });
  };

  hasContact = name => {
    const { contacts } = this.props;
    return contacts.some(item => item.name.toLowerCase() === name.toLowerCase());
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addContact } = this.props;

    const { name, number } = this.state;

    validateAll({ name, number }, rules, messages)
      .then(() => {
        const isContactExist = this.hasContact(name);

        if (isContactExist) {
          this.toggleContactExistFlag();
        } else {
          addContact({ name, number });
          this.resetForm();
        }
      })
      .catch(errors => {
        const formatedErrors = {};
        errors.forEach(error => {
          formatedErrors[error.field] = error.message;
        });
        this.setState({
          errors: formatedErrors,
        });
      });
  };

  render() {
    const { name, number, errors, isContactAlreadyExist } = this.state;
    const { isLoading } = this.props;
    return (
      <div>
        <CSSTransition
          in={isContactAlreadyExist}
          timeout={250}
          classNames={slideReverseTransition}
          unmountOnExit
        >
          <PopUpNotification type="error" title="Contact with the same name already exist!" />
        </CSSTransition>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <div>
            <label htmlFor={this.InputNameId}>Name:</label>
            <TextField
              error={errors && errors.name}
              fullWidth
              helperText={errors && errors.name}
              variant="outlined"
              margin="normal"
              color="primary"
              className={styles.input}
              name="name"
              id={this.InputNameId}
              type="text"
              onChange={this.handleChange}
              value={name}
              autoComplete="off"
              maxLength={20}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaceIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor={this.InputNuberId}>Number:</label>

            <InputMask
              mask="+380 99 999 99 99"
              maskChar={null}
              onChange={this.handleChange}
              value={number}
            >
              {inputProps => (
                <TextField
                  error={errors && errors.number}
                  fullWidth
                  helperText={errors && errors.number}
                  variant="outlined"
                  margin="normal"
                  color="primary"
                  className={styles.input}
                  name="number"
                  id={this.InputNuberId}
                  type="text"
                  autoComplete="off"
                  InputProps={{
                    ...inputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneAndroidIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            </InputMask>
          </div>
          {isLoading ? (
            <CircularProgress style={{ display: 'block', margin: '0 auto' }} />
          ) : (
            <Button fullWidth color="primary" variant="contained" type="submit">
              ADD CONTACT
            </Button>
          )}
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  addContact: propTypes.func.isRequired,
  isLoading: propTypes.bool.isRequired,
};

export default ContactForm;
