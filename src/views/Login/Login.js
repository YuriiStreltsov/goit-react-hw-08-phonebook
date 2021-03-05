import React, { Component } from 'react';
import shortid from 'shortid';
import Button from '@material-ui/core/Button';
import InputIcon from '@material-ui/icons/Input';
import s from './Login.module.scss';

class LogIn extends Component {
  inputNumberId = shortid.generate();
  inputPasswordId = shortid.generate();

  render() {
    const { inputNumberId } = this.inputNumberId;
    const { inputPasswordId } = this.inputPasswordId;
    return (
      <>
        <h2 className={s.LoginTitle}>To Login, fill in all the fields below</h2>
        <form className={s.LoginForm}>
          <label htmlFor={inputNumberId} className={s.labelTitle}>
            Email:
          </label>
          <input
            id={inputNumberId}
            type="email"
            name="number"
            onChange={this.handleChange}
            className={s.input}
          />
          <label htmlFor={inputPasswordId} className={s.labelTitle}>
            Password:
          </label>
          <input
            id={inputPasswordId}
            type="email"
            name="number"
            onChange={this.handleChange}
            className={s.input}
          />
          <Button
            style={{ marginRight: 'auto', width: 200 }}
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<InputIcon />}
          >
            Log in
          </Button>
        </form>
      </>
    );
  }
}

export default LogIn;
